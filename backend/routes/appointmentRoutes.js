const express = require('express');
const router = express.Router();
const pool = require('../server'); 
const cors = require('cors');

// Get all appointments from a specific table
router.get('/:table', async (req, res) => {
    const { table } = req.params;
    const query = `SELECT * FROM ${table}`;

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Server error');
    }
});

// Update an appointment's status
router.put('/:table/:appointmentId/:values', async (req, res) => {
    const { table, appointmentId, values } = req.params;
    const query = `UPDATE ${table} SET appointment_status = $1 WHERE appointment_id = $2`;

    try {
        const result = await pool.query(query, [values, appointmentId]);
        res.json({ message: 'Update successful', data: result });
    } catch (err) {
        console.error('Error updating data:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
