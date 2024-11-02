const express = require('express');
const axios = require('axios');
const router = express.Router();


const PAYMONGO_SECRET_KEY = 'sk_test_VGoRbb5odY4Ma6Q9BRHZxJjC';

router.post('/create-payment', async (req, res) => {
    console.log("Received payment request:", req.body);
    try {
        const { amount, paymentMethod } = req.body; 

        const response = await axios.post(
            'https://api.paymongo.com/v1/payment_intents',
            {
                data: {
                    attributes: {
                        amount: 25000,
                        payment_method_allowed: ['gcash', 'card'],
                        payment_method_options: {
                            card: { request_three_d_secure: 'any' },
                        },
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
        res.json(response.data); 
    } catch (error) {
        console.error('Error creating payment:', error.response?.data || error.message);
        res.status(500).send(error.response?.data || 'Payment creation failed');
    }
});

module.exports = router;

/* const express = require('express');
const axios = require('axios');
const { Pool } = require('pg'); // or your chosen ORM
const router = express.Router();

// Initialize database connection
const pool = new Pool({
    user: 'postgres', // your db user
    host: 'localhost',
    database: 'thePoint',
    password: 'admin123', // your db password
    port: 5432,
});

const PAYMONGO_SECRET_KEY = 'sk_test_VGoRbb5odY4Ma6Q9BRHZxJjC';

router.post('/create-payment', async (req, res) => {
    const { amount, paymentMethod, patientId, patientNumber } = req.body;

    try {
        // Create payment intent
        const response = await axios.post(
            'https://api.paymongo.com/v1/payment_intents',
            {
                data: {
                    attributes: {
                        amount: 25000,
                        payment_method_allowed: [paymentMethod],
                        payment_method_options: {
                            card: { request_three_d_secure: 'any' },
                        },
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

        // Log payment response
        console.log('Payment response:', response.data);

        // Insert downpayment into the database
        const downpayAmount = amount; // assuming this is the downpayment amount
        const date = new Date(); // Get current date

        const insertPaymentQuery = `
            INSERT INTO downpayment (downpay_amount, date, patient_id, patient_number)
            VALUES ($1, $2, $3, $4) RETURNING downpay_id
        `;
        
        const insertPaymentValues = [downpayAmount, date, patientId, patientNumber];
        const insertResult = await pool.query(insertPaymentQuery, insertPaymentValues);

        console.log('Downpayment recorded with ID:', insertResult.rows[0].downpay_id);

        // Respond to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error creating payment:', error.response?.data || error.message);
        res.status(500).send(error.response?.data || 'Payment creation failed');
    }
});

module.exports = router;

//card: { request_three_d_secure: 'any' },
 */