const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerUser } = require('../controllers/userController');
const router = express.Router();
const User = require('../models/User');

router.post('/register', registerUser);

router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
    
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
    
        // Create a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ token });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/create', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
