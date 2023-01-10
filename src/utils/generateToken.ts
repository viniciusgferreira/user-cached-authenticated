import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export function generateToken(id: Types.ObjectId) {
  const secret = String(process.env.SECRET);
  const expirationSeconds = 300;
  const token = jwt.sign({ id }, secret, {
    expiresIn: expirationSeconds
  });
  console.log(`token generated with ${expirationSeconds}`);
  return token;
}
