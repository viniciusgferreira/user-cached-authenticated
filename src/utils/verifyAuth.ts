import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('x-acess-token');

  if (!token) { return res.status(401).json({ auth: false, message: 'Token not provided' }); }

  try {
    jwt.verify(token, String(process.env.SECRET));
    console.log(`request authorized with token ${token}`);
    return next();

  } catch (err) {
    if (err instanceof Error) { console.log(`request forbidden: ${err.message}`); }
    return res.status(401).json({ auth: false, message: 'Token invalid' });
  }
}

