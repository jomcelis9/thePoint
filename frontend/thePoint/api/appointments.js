const mongoose = require('mongoose')


const AppointmentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber:  String,
    appointmentNum: Number,
    prefDate: Date,
    prefTime: Date,
    appointmentStatus: String
})

const AppointmentModel = mongoose.model("testAppointment", AppointmentSchema)
module.exports = AppointmentModel