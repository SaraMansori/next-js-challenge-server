import { Router } from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';

router.post('/signup', authController.SignUp);
router.post('/login', authController.LogIn);
router.post('/verify', authController.VerifyToken);

module.exports = router;
