const express = require('express');
const router = express.Router();
const  performQuery  = require('../index.js');
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'thePoint',
    password: 'admin123',
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
  const query = `UPDATE ${table} SET ${col} = '${values}' WHERE appointment_id = ${appointmentId}`;
  
      try {
        const result = await pool.query(query);
        res.json({ message: 'Update successful', data: result });
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('Server Error');
    }
  });
  
// delete table
//   router.delete('/:table/:appointmentNumber', async (req, res) => {
//     const {table, appointmentNumber} = req.params;
//     const query = `DELETE FROM ${table} WHERE APPOINTMENT_NUMBER = 3;`
// })


module.exports = router;


