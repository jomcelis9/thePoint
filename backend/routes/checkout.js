const express = require('express');
const Paymongo = require('paymongo');
const axios = require('axios'); 
const { verifyToken } = require('../controllers/auth'); 

const router = express.Router();
router.use(express.json());

const secretKey = process.env.PAYMONGO_SECRET_KEY;

router.post('/checkout', async (req, res) => {
    console.log("Checkout route reached:");

    const { name, email, phone, amount, description } = req.body;

    try {
        const options = {
            method: 'POST',
            url: 'https://api.paymongo.com/v1/checkout_sessions',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: 'Basic c2tfdGVzdF95ekxkdGZXcG5rUWlBZjNHZGllNEpEUUU6'
            },
            data: {
                data: {
                    attributes: {
                        billing: { name, email, phone },
                        send_email_receipt: false,
                        show_description: true,
                        show_line_items: true,
                        payment_method_types: ['gcash', 'card', 'paymaya', 'qrph'],
                        description: 'Reservation',
                        line_items: [
                            {
                                currency: 'PHP',
                                amount: amount, // Amount in centavos
                                quantity: 1,
                                name: 'Downpayment'
                            }
                        ]
                    }
                }
            }
        };

        
        const response = await axios(options);

        res.status(200).json({ checkoutUrl: response.data.data.attributes.checkout_url });
    } catch (error) {
        console.error("Error creating checkout session:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to create checkout session', details: error.message });
    }
});

module.exports = router;
