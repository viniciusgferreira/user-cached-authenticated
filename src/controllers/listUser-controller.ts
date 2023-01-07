import { Request, Response } from 'express';
import { listUsers } from '../services/listUsers-service';

// LIST ALL USERS - GET
export async function listUserController(req: Request, res: Response) {
  const allUsers = await listUsers();
  res.json(allUsers);
}
