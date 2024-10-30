const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/authRoutes'); 
const appointmentRoutes = require('./routes/appointmentRoutes'); 

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*' 
}));


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});


pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => {
        console.error('Database connection error:', err.stack);
        process.exit(1);
    });


app.use('/api/auth', authRoutes);

app.use('/api/appointments', appointmentRoutes);


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
        
         await fetchData('views_rejected_appointments');
         await fetchData('views_confirmed_appointments');
        await fetchData('views_pending_appointments');
        console.log("Data is refreshed");
    } catch (error) {
        console.log("Error Fetching Data: ", error);
    }
};


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


pool.query(`SELECT * FROM appointments`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    
});

module.exports = { pool, refreshApi }; 
