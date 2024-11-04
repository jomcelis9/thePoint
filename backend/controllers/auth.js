const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const adminCredentials = [
  { email: 'paulRoss@gmail.com', password: '$2b$10$uQkUn5jTi1/QNb9TGwvof.IVXCBz4xR3T3lqSyslIuHTTmnAE1IVe' },
  { email: 'janesmith@gmail.com', password: '$2b$10$awGV48IT4fKJ2SHI1.WLMe9s1OzXltf7qA8rZkL73TF2yZ3FknIq2' }
];

async function register(req, res) {
  const { name, lastname, email, password } = req.body;

  try {
    const emailExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (emailExists.rows.length > 0) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, lastname, email, hashedPassword]
    );

    res.status(201).json({ user: newUser.rows[0] });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}

const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists in the database
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email.trim()]);
      console.log('User from DB:', user.rows); // Log the user data from DB
  
      if (user.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const foundUser = user.rows[0];
      // Check the password for both regular and admin users
      const validPassword = await bcrypt.compare(password.trim(), foundUser.password);
      console.log('Password valid:', validPassword); // Log the result
  
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a token based on whether the user is an admin or not
      const token = jwt.sign(
        { userId: foundUser.user_id, isAdmin: foundUser.is_admin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({
        token,
        user: {
          email: foundUser.email,
          isAdmin: foundUser.is_admin,
          redirect: foundUser.is_admin ? '/admin/dashboard' : '/booking',
        },
      });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json({ error: 'Server error', details: err.message });
    }
  };
  
  

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;
    next();
  });
}

module.exports = { register, login, authenticateToken };
