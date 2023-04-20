import express from "express";
import  { login, verifyToken,getUserDetails, logout } from "../utils/auth.js"
const router = express.Router();


// Login route
router.post('/login', login);

// Refresh token route
//router.get('/refresh', refresh);

// Get user details route
router.get('/user', verifyToken,getUserDetails);

// Logout route
router.post('/logout', logout);

export default router;
