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

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Ensure it matches the React app's port
    credentials: true
}));

app.use(routes);
app.use('/routes/auth', authRoutes);
app.use('/routes/appointments', appointmentRoutes);


const performQuery = async (query, values) => {
    try {
        const result = await pool.query(query, values);
        return result.rows;
    } catch (err) {
        console.error("Database Error:", err);
        throw err;
    }
};

// Optional: Refresh API function
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

// Call refreshApi if needed
// refreshApi();

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
