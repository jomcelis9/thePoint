const express = require('express');
const router = express.Router();
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,

});

// Read table
router.get('/:table', async (req, res) =>{
    const {table} = req.params;

    const query = `SELECT * FROM ${table}`;
    // console.log("table used: ", table)

    try{
        const  result = await pool.query(query);
        // console.log("Query: ", "'" + query + "'" )
        res.json(result.rows)
    }catch{
    }

});

// update table

router.put('/:table/:appointmentId/:values', async (req, res) => {
  const values = req.params.values
  const table = req.params.table;
  const appointmentId = req.params.appointmentId
  const col = "appointment_status";  // Column to update
  // const name = "Creepers";  // New value to set
  const query = `UPDATE ${table} SET ${col} = '${values}' WHERE appoint_id = ${appointmentId}`;
  
      try {
        console.log(appointmentId);
        const result = await pool.query(query);
        res.json({ message: 'Update successful', data: result });
        
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('Server Error');
    }
  });

// ================ NEW: POST  ROUTE ================ POSTS TO APPOINTMENT TABLE

router.post('/appointments', async (req, res) => {
    const {
        appoint_date, appoint_type, time,
        patient_name, patient_age,
        contact_number, guardian_contact, guardian_name,
    } = req.body;

    const query = `
        INSERT INTO appointments 
        (appoint_date, appoint_type, time, patient_name, 
        patient_age, contact_number, guardian_contact, guardian_name) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8);
    `;

    const values = [
        appoint_date, appoint_type, time,
        patient_name, patient_age, 
        contact_number, guardian_contact, guardian_name,
    ];

    try {
        const result = await pool.query(query, values);
        res.json({ message: 'Insert successful', data: result });
    } catch (error) {
        console.log('Error executing query:', error.message);  // Log the specific error message
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// ================ NEW: POST  ROUTE ================ POSTS TO APPOINTMENT TABLE


// ================ NEW: DELETE  ROUTE ================

router.delete('/:table/:columnId', async (req,res) => {
    const table = req.params.table;
    const columnId = req.params.columnId

    const query = `DELETE FROM ${table} WHERE ${columnId} = $1`;
    
    try {
        const result = await pool.query(query, [columnId]);
        res.json({ message: 'Update successful', data: result });

    } catch (error) {

        console.log(error)
        
    }
});

// ================ NEW: DELETE  ROUTE ================
  
module.exports = router;


