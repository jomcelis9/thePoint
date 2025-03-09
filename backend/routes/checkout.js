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




router.post('/webhook', express.json(), async (req, res) => {
    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    const signature = req.headers['paymongo-signature']; // Signature for verification

    // Log for debugging purposes
    console.log("Webhook event received:", req.body);

    try {
        // Basic validation - you might need a more complex validation here depending on PayMongo's requirements
        if (!signature) {
            return res.status(400).send("Missing PayMongo signature.");
        }

        const event = req.body;

        // Check the event type
        if (event.data.attributes.type === 'payment.paid') {
            console.log('Payment successful:', event.data.id);
            // Handle the payment.paid event, e.g., update the appointment status in the database
        } else if (event.data.attributes.type === 'payment.failed') {
            console.log('Payment failed:', event.data.id);
            // Handle payment failure if necessary
        } else {
            console.log('Unhandled event type:', event.data.attributes.type);
        }

        // Respond with a 200 status to acknowledge receipt
        res.status(200).json({ received: true });
    } catch (error) {
        console.error("Error handling webhook:", error);
        res.status(500).send("Webhook handling error.");
    }
});

module.exports = router;
