const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../db');

const PAYMONGO_SECRET_KEY = 'sk_test_VGoRbb5odY4Ma6Q9BRHZxJjC';

// Endpoint to create payment intent
router.post('/create-payment', async (req, res) => {
    console.log("Received payment request:", req.body);
    try {
        const { amount, paymentMethod, patientId, patientNumber, accountName, accountNumber, referenceNumber } = req.body;

        // Use a test patient ID if no patientId is provided
        const testPatientId = '9999'; // Make sure this ID exists in your database
        const effectivePatientId = patientId || testPatientId;

        if (paymentMethod !== 'gcash') {
            return res.status(400).json({ error: 'Only GCASH payments are allowed.' });
        }

        const response = await axios.post(
            'https://api.paymongo.com/v1/payment_intents',
            {
                data: {
                    attributes: {
                        amount: amount,
                        payment_method_allowed: ['gcash'],
                        currency: 'PHP',
                    },
                },
            },
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Payment response:', response.data);

        // Check payment status
        if (response.data.data.attributes.status === 'awaiting_payment_method') {
            // Insert downpayment into the database
            const downpaymentResult = await db.query(`
                INSERT INTO downpayment (downpay_amount, patient_id, patient_number)
                VALUES ($1, $2, $3) RETURNING dowpay_id`,
                [amount, effectivePatientId, patientNumber]
            );

            const downpayId = downpaymentResult.rows[0].dowpay_id;

            // Insert payment record
            const paymentResult = await db.query(`
                INSERT INTO payment (payment_amount, payment_name, patient_id, downpay_id, downpay_amount)
                VALUES ($1, $2, $3, $4, $5) RETURNING payment_id`,
                [amount, accountName, effectivePatientId, downpayId, amount]
            );

            // Send response back to the client
            res.status(201).json({
                message: 'Payment processed successfully',
                paymentId: paymentResult.rows[0].payment_id,
                downpayId: downpayId
            });
        } else {
            res.status(400).json({ error: 'Payment not completed. Status: ' + response.data.data.attributes.status });
        }
    } catch (error) {
        console.error('Error creating payment:', error.response?.data || error.message);
        res.status(500).send(error.response?.data || 'Payment creation failed');
    }
});


module.exports = router;
