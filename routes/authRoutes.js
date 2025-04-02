import express from 'express';
import {tokenAuth,scopeAuth} from '../middleware/auth.js';
import { registerUser, loginUser, getUserData, updateUserData,hostedLogin,getToken,logout } from '../handlers/authHandler.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', tokenAuth, getUserData);
router.put('/update', tokenAuth, scopeAuth("read:current_user"), updateUserData);


// backend login
router.get('/hosted-login', hostedLogin);
router.post('/get-token', getToken);
router.get('/logout', logout);

export default router;
