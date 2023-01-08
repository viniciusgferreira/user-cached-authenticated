import { Router } from 'express';
import { registerUserController } from '../controllers/createUser-controller';
import { listUserController } from '../controllers/listUser-controller';
import { loginUserController } from '../controllers/loginUser-controller';

export const router = Router();

// REGISTER NEW USER
router.post('/register', registerUserController);

// LIST USERS
router.get('/users', listUserController);

// LOGIN
router.post('/login', loginUserController);
