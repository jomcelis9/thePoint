const express = require('express');
const { register, login } = require('../controllers/auth'); // Ensure correct import path
const router = express.Router();
const cors = require('cors'); // If not needed, this can be removed

router.post('/register', register);
router.post('/login', login);

module.exports = router;
