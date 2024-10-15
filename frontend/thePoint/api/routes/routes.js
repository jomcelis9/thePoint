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

// Read table
router.get('/:table', async (req, res) =>{
    const {table} = req.params;

    const query = `SELECT * FROM ${table}`;
    console.log("table used: ", table)

    try{
        const  result = await pool.query(query);
        console.log("Query: ", query)
        res.json(result.rows)
    }catch{
    }

});

module.exports = router;
