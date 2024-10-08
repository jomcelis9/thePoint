const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) return res.status(400).json({ message: "User already exists."});

        const user = new User({ email, password});
        await user.save();

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({ token, user});
    } catch (error) {
        res.status(500).json({ message: "Server Error"});
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user) return res.status(400).json({ message: 'Invalid Credentials'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid Credentials'});

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({ token, user});
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

module.exports = { register, login };