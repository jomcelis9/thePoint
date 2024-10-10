const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 4000;
const AppointmentModel = require('./models/appointments.js')

app.use(express.json());
app.use(cors({
    origin: '*' // Ensure it matches the React app's port
  }));

// app.get('/test' , (req,res) => {
//     res.json('test ok');
// });

// app.post('/register',(req,res) => {
//     const {name, lastName ,email, password} = req.body;
//     res.json({name, lastName ,email, password});
// });

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:123@testthepoint.tzguy.mongodb.net/?retryWrites=true&w=majority&appName=testThePoint')
.then(() =>{
    console.log('connected to mongoDb')
    app.listen(port, () =>{
        console.log("Server is running on port:", port)
    });
})
.catch((error) =>{
    console.log(error)
})

app.get('/getAppointments', async(req,res) =>{
    try{
        const appointments = await AppointmentModel.find({});
        console.log('Fetched appointments:', appointments); 
        res.status(200).json(appointments);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});