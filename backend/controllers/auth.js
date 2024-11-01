const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db'); 

//register function
async function register(req, res) {
  console.log(req.body);
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

        res.status(201).json({user: newUser.rows[0] });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
}
//login function
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request body:", req.body); 

  try {
      console.log("Querying for user:", email);
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email.trim()]);

      console.log("User fetched:", user.rows); 

      if (user.rows.length === 0) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const validPassword = await bcrypt.compare(password.trim(), user.rows[0].password);
      if (!validPassword) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
          { userId: user.rows[0].user_id },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      res.json({ token });

     
  } catch (err) {
      console.error("Error during login:", err);
      console.error("Full Error Object:", err); 
      res.status(500).json({ error: 'Server error', details: err.message });
  }
};

module.exports = { register, login }; 
