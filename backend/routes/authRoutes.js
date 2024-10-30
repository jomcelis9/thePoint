const express = require('express');
const { register, login } = require('../controllers/auth');
const router = express.Router();
const cors = require('cors');


router.post('/register', register); 
router.post('/login', login);       

module.exports = router;
