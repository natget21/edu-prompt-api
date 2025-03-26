import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { registerUser, loginUser, getUserData, updateUserData } from '../handlers/authHandler.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUserData);
router.put('/update', authMiddleware, updateUserData);

export default router;
