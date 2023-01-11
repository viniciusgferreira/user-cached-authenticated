import { Router } from 'express';
import { registerUserController } from '../controllers/createUser-controller';
import { listUserController } from '../controllers/listUser-controller';
import { listUserByIdController } from '../controllers/listUserById-controller';
import { loginUserController } from '../controllers/loginUser-controller';
import { verifyAuth } from '../utils/verifyAuth';

export const router = Router();

// REGISTER NEW USER
router.post('/register', registerUserController);

// LIST USERS
router.get('/users', verifyAuth, listUserController);
router.get('/users/:id', verifyAuth, listUserByIdController);

// LOGIN
router.post('/login', loginUserController);
