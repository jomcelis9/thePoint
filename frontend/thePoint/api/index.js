const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const AppointmentModel = require('./Appointments.js')

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.get('/test' , (req,res) => {
    res.json('test ok');
});

app.post('/register',(req,res) => {
    const {name, lastName ,email, password} = req.body;
    res.json({name, lastName ,email, password});
});

app.get('/getAppointment', (req,res) => {
    AppointmentModel.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.json(err))
})

mongoose.connect("mongodb://localhost:27017/testAppointment")

app.listen(4000, () =>{
    console.log("Server is running")
});
 
