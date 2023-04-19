import express from "express";

const router = express.Router();
const { login, refresh, getUserDetails, logout } = require('../utils/auth');

// Login route
router.post('/login', login);

// Refresh token route
router.get('/refresh', refresh);

// Get user details route
router.get('/user', getUserDetails);

// Logout route
router.post('/logout', logout);

export default router;
