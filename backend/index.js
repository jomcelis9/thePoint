const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg')
const routes = require('./routes/routes.js')

app.use(express.json());
app.use(cors({
    origin: '*' // Ensure it matches the React app's port
  }));
app.use(routes);

// app.get('/test' , (req,res) => {
//     res.json('test ok');
// });

// app.post('/register',(req,res) => {
//     const {name, lastname ,email, password} = req.body;
//     res.json({name, lastname ,email, password});
// });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'thePoint',
    password: 'admin123',
    port: 5432,

});

pool.connect();

const PORT = 5001;

app.listen(PORT,()=>{
    console.log(`Server running on port server.js ${PORT}`)
});


const performQuery = async (query, values) => {
    try{
        const result = await pool.query(query, values);
        return result.rows;
    }catch{
        console.error("Database Error: " + err);
        throw err;
    }
};

const refreshApi =  async () => {

    try {
        fetchData('views_rejected_appointments');
        fetchData('views_confirmed_appointments');
        fetchData('views_pending_appointments');
        console.log("Data is refreshed");

    } catch (error) {
        console.log("Error Fetching Data: ", error);
    }
};

module.exports = {refreshApi};

