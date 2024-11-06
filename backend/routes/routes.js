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

router.put('/session/:id', async (req, res) => {
    const { id } = req.params;
    const sessionData = req.body;

    const query = `UPDATE session SET  
        session_description = $1, 
        session_date = '2024-11-13', 
        session_title = $2, 
        session_time = $3 
        WHERE session_id = $4 
        AND patient_id = $5`; // Updated to use $1, $2, etc.

    try {
        // Assuming you have a database connection method
        const result = await pool.query(query, [
            sessionData.session_description, // $1
            sessionData.session_title,       // $3
            sessionData.session_time,        // $4
            id,                               // $5
            sessionData.patient_id           // $6
        ]);

        if (result.rowCount > 0) { // Use rowCount for PostgreSQL
            res.status(200).json({ message: 'Session updated successfully.' });
        } else {
            res.status(404).json({ message: 'Session not found or patient ID does not match.' });
        }
    } catch (error) {
        console.error('Error updating session:', error);
        res.status(500).json({ message: 'An error occurred while updating the session.' });
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
        preferred_date, therapy_type, preferred_time,
        guardian_contact, guardian_name, patient_id, booking_date
    } = req.body;

    const insertIntoAppointments = `
        INSERT INTO appointments 
        (preferred_date, therapy_type, preferred_time, 
        guardian_contact, guardian_name) 
        VALUES 
        ($1, $2, $3, $4, $5) RETURNING appoint_id;
    `;

    const appointmentValues = [
        preferred_date, therapy_type, preferred_time,
        guardian_contact, guardian_name,
    ];

    const insertIntoPatientAppointments = `
        INSERT INTO patient_appointments 
        (patient_id, appoint_id, booking_date)
        VALUES
        ($1, $2, $3);
    `;

    try {
        // Step 1: Insert into appointments and get appoint_id
        const appointmentResult = await pool.query(insertIntoAppointments, appointmentValues);
        const appoint_id = appointmentResult.rows[0].appoint_id;  // Retrieve appoint_id

        // Step 2: Insert into patient_appointments using the retrieved appoint_id
        const patientAppointmentsValues = [
            patient_id, appoint_id, booking_date
        ];
        
        await pool.query(insertIntoPatientAppointments, patientAppointmentsValues);

        res.json({ message: 'Insert successful', appoint_id: appoint_id });
    } catch (error) {
        console.log('Error executing query:', error.message);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});


// ================ NEW: POST  ROUTE ================ POSTS TO APPOINTMENT TABLE

router.post('/session', async (req, res) => {
    const {
        patient_id, session_description, session_title, session_date,
        session_time
    } = req.body;

    const query = `
        INSERT INTO session 
        (patient_id, session_description, session_title, session_date,
        session_time) 
        VALUES 
        ($1, $2, $3, $4, $5);
    `;

    const values = [
        patient_id, session_description, session_title, session_date,
        session_time
    ];

    try {
        const result = await pool.query(query, values);
        res.json({ message: 'Insert successful', data: result });
    } catch (error) {
        console.log('Error executing query:', error.message);  // Log the specific error message
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});


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


// ================ NEW: FETCH  ROUTE ================ FETCHES PATIENT ID FROM SESSIONS

router.get("/patients/patientSessions/:patient_id", async (req, res) => {
    const { patient_id } = req.params;
    const sessionQuery = `SELECT * FROM session WHERE patient_id = $1`
    const patientQuery = `SELECT patient_name FROM patient WHERE patient_id = $1`
    try {
    console.log("Patient Id:  ",patient_id)

      const session = await pool.query(sessionQuery, [patient_id]);
      const patient = await pool.query(patientQuery, [patient_id]);
      res.json({ sessions: session.rows, patient_name: patient.rows[0].patient_name });
      console.log("Sessions: ", session.rows)
    } catch (error) {
      console.error("Error fetching sessions:", error);
      res.status(500).json({ error: "Error fetching sessions" });
    }
  });  

// ================ NEW: FETCH  ROUTE ================ 

// Route to get patients by user_id
router.get('/patient', async (req, res) => {
    const userId = req.query.user_id; // Retrieve user_id from query parameters
    const query = `SELECT * FROM patient WHERE user_id = 1`
    try {
        const  result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;


