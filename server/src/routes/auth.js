const express = require('express');
const { register, login, getMe, logout } = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const { userValidationRules, handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// Public routes
router.post('/register', userValidationRules(), handleValidationErrors, register);
router.post('/login', login);

// Protected routes
router.get('/me', auth, getMe);
router.post('/logout', auth, logout);

module.exports = router;
