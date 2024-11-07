const express = require('express');
const axios = require('axios');


const router = express.Router();
router.use(express.json());

const secretKey = process.env.PAYMONGO_SECRET_KEY;

router.post('/checkout', async (req, res) => {
    console.log("Checkout route reached:");

    const { name, email, phone, amount, description, date } = req.body;

    try {
       
        const options = {
            method: 'POST',
            url: 'https://api.paymongo.com/v1/links',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: 'Basic c2tfdGVzdF95ekxkdGZXcG5rUWlBZjNHZGllNEpEUUU6'
            },
            data: {
                data: {
                    attributes: {
                        amount: amount, // Amount in centavos
                        description: description,
                        remarks: 'Downpayment for reservation',
                    },
                },
            },
        };

        const response = await axios(options);
        const checkoutUrl = response.data.data.attributes.checkout_url;
        
        res.status(200).json({ checkoutUrl });
    } catch (error) {
        console.error("Error creating payment link:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to create payment link', details: error.message });
    }
});

module.exports = router;
