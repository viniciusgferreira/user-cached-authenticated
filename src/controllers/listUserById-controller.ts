import { Request, Response } from 'express';
import { listUserById } from '../services/listUserById-service';

export async function listUserByIdController(req: Request, res: Response) {
  const { id } = req.params;
  const user = await listUserById(id);
  !user ? res.status(404).send({ msg: 'user not found' }) : res.json(user);
}
