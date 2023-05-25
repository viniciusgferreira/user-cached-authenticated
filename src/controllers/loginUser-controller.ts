import { Request, Response } from 'express';
import { loginUserService } from '../services/loginUser-service';

export async function loginUserController(req: Request, res: Response) {
  const { username, password } = req.body;
  const token = await loginUserService({ username, password });

  if (!token) {
    res.status(500).send({ msg: 'user or password invalid' });
  }

  res.set('Authorization', token);
  res.status(204).send();
}
