import { Router } from 'express';
import { registerUserController } from '../controllers/createUser-controller';
import { listUserController } from '../controllers/listUser-controller';

export const router = Router();

// REGISTER NEW USER
router.post('/register', registerUserController);

// LIST USERS
router.get('/users', listUserController);
