import { Request, Response } from 'express';
import { createUserService } from '../services/createUser-service';

export async function registerUserController(req: Request, res: Response) {
  const { username, password } = req.body;
  const newUser = await createUserService({ username, password });
  !newUser ? res.status(500).send('user not created') : res.json(newUser);
}
