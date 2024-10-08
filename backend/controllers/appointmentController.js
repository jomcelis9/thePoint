const Appointment = require('../models/appointmentModel');

const bookAppointment = async (req, res) => {
  const { userId, date, time } = req.body;

  try {
    const appointment = new Appointment({ userId, date, time });
    await appointment.save();

    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { bookAppointment, getAppointments };
