const express = require('express');
const router = express.Router();
const  performQuery  = require('../index.js');
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,

});

// Insert Data

router.post('/:table', async (req, res) => {
  const { table } = req.params;
  const {
    appoint_id, appoint_date, appoint_type, time,
    patient_id, patient_name, patient_age,
    therapist_name, therapist_id, appointment_status, contact_number
  } = req.body;

  // Define column names and values to insert
  const columns = "appoint_id, appoint_date, appoint_type, time, patient_id, patient_name, patient_age, therapist_name, therapist_id, appointment_status, contact_number";
  const values = [appoint_id, appoint_date, appoint_type, time, patient_id, patient_name, patient_age, therapist_name, therapist_id, appointment_status, contact_number];

  try {
    const query = `INSERT INTO ${table} (${columns}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]); // Send the inserted row as response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
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

// ================ NEW: DELETE  ROUTE ================

router.delete('/:table/:columnId/:Id', async (req, res) => {
    const table = req.params.table;
    const columnId = req.params.columnId;
    const Id = req.params.Id;
  
    console.log(`Deleting from ${table}, where ${columnId} = ${Id}`);
    const query = `DELETE FROM ${table} WHERE ${columnId} = $1`;
    
    try {
      const result = await pool.query(query, [Id]);
      res.json({ message: 'Delete successful', data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error deleting row', error });
    }
  });
  

// ================ NEW: DELETE  ROUTE ================
  
module.exports = router;


