const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const routes = require('./routes/routes.js');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Ensure it matches the React app's port
    credentials: true
}));

// Database configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres2',
    password: '123',
    port: 5433,
});

// Test the database connection
pool.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Test route
app.get('/test', (req, res) => {
    res.send('API is working');
});

// Mount routes
app.use(routes); // General routes
app.use('/routes/auth', authRoutes); // Auth routes
app.use('/routes/appointments', appointmentRoutes); // Appointment routes

// Example query function
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

pool.query(`select * from appointments`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    pool.end;
})

// Call refreshApi if needed
// refreshApi();

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


