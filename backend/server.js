const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const routes = require('./routes/routes.js');
const paymentRoute = require('./routes/payment');
const pool = require('./db'); 
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));

// Route configurations
app.use(routes);
app.use('/routes/auth', authRoutes);
app.use('/routes/appointments', appointmentRoutes);
app.use('/routes/payment', paymentRoute);

// Perform a database query
const performQuery = async (query, values) => {
    try {
        const result = await pool.query(query, values);
        return result.rows;
    } catch (err) {
        console.error("Database Error:", err);
        throw err;
    }
};

// Refresh API data function
const refreshApi = async () => {
    try {
        await performQuery('SELECT * FROM views_rejected_appointments');
        await performQuery('SELECT * FROM views_confirmed_appointments');
        await performQuery('SELECT * FROM views_pending_appointments');
        console.log("Data is refreshed");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Exporting the pool for database access
module.exports = { pool };
