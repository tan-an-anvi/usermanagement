import { Router } from 'express';
import { register, login, verifyEmail, enable2FA, login2FA, oauthCallback } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);
router.post('/enable-2fa', enable2FA);
router.post('/login-2fa', login2FA);
router.get('/oauth/:provider/callback', oauthCallback);

export default router;