import { Request, Response } from 'express';
import { loginUserService } from '../services/loginUser-service';

export async function loginUserController(req: Request, res: Response) {
  const { username, password } = req.body;
  const token = await loginUserService({ username, password });
  !token ? res.status(500).send({ msg: 'user or password invalid' }) : res.json({ auth: true, token: token });
}
