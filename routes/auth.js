import express from 'express'
import { register, login } from '../controllers/auth.js';

const router = express.Router()

router.post('/register',register);
//resister
router.post('/login',login);

//login

export default router;
