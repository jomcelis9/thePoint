const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const paymentRoute = require('./routes/payment');
const pool = require('./db'); 
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/routes/auth', authRoutes);
app.use('/routes/appointments', appointmentRoutes);
app.use('/routes/payment', paymentRoute);


const performQuery = async (query, values) => {
    try {
        const result = await pool.query(query, values); 
        return result.rows;
    } catch (err) {
        console.error("Database Error: " + err);
        throw err;
    }
};


const refreshApi = async () => {
    try {
        await performQuery('SELECT * FROM views_rejected_appointments');
        await performQuery('SELECT * FROM views_confirmed_appointments');
        await performQuery('SELECT * FROM views_pending_appointments');
        console.log("Data is refreshed");
    } catch (error) {
        console.log("Error Fetching Data: ", error);
    }
};


refreshApi();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/test', (req, res) => {
    res.send('API is working');
});
