/* const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../db');

// Load PAYMONGO_SECRET_KEY from environment variables for security
const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY || 'sk_test_VGoRbb5odY4Ma6Q9BRHZxJjC';

router.post('/create-payment', async (req, res) => {
    console.log("Received payment request:", req.body);
    try {
        const { amount, patientId, patientNumber, accountName } = req.body;

        const testPatientId = '9999'; 
        const effectivePatientId = patientId || testPatientId;

        // Create a Link request to PayMongo
        const response = await axios.post(
            'https://api.paymongo.com/v1/links',
            {
                data: {
                    attributes: {
                        amount: amount, // in centavos (e.g., 25000 for PHP 250.00)
                        description: 'Downpayment for patient',
                    },
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${PAYMONGO_SECRET_KEY}`, // Update to Bearer token
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Link creation response:', response.data);

        const checkoutUrl = response.data.data.attributes.checkout_url;

        // Save payment details in your database if needed
        const downpaymentResult = await db.query(`
            INSERT INTO downpayment (downpay_amount, patient_id, patient_number)
            VALUES ($1, $2, $3) RETURNING dowpay_id`,
            [amount, effectivePatientId, patientNumber]
        );

        const downpayId = downpaymentResult.rows[0].dowpay_id;

        const paymentResult = await db.query(`
            INSERT INTO payment (payment_amount, payment_name, patient_id, downpay_id, downpay_amount)
            VALUES ($1, $2, $3, $4, $5) RETURNING payment_id`,
            [amount, accountName, effectivePatientId, downpayId, amount]
        );

        res.status(201).json({
            message: 'Payment link created successfully',
            checkoutUrl: checkoutUrl,  
            paymentId: paymentResult.rows[0].payment_id,
            downpayId: downpayId,
        });
    } catch (error) {
        console.error('Error creating payment link:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        res.status(500).json({
            message: 'Payment link creation failed',
            error: error.response?.data || error.message,
        });
    }
});

module.exports = router;
 */