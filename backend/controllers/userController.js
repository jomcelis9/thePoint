const bcrypt = require('bcrypt');
const User = require('../models/userModel'); 

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

     
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser };
