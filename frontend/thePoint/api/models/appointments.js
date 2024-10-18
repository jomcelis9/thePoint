const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    appointmentNumber: Number,
    appointmentStatus: String
})

const AppointmentModel = mongoose.model("appointments", AppointmentSchema) //collection
module.exports = AppointmentModel