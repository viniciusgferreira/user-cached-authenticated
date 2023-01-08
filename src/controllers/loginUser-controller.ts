import { Request, Response } from 'express';
import { loginUserService } from '../services/loginUser-service';

export async function loginUserController(req: Request, res: Response) {
  const { username, password } = req.body;
  const newUser = await loginUserService({ username, password });
  !newUser ? res.status(500).send('user or password invalid') : res.json(newUser);
}
