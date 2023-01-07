import bcrypt from 'bcrypt';
import { User } from '../models/User-model';

export const createUserService = async (user: { username: string; password: string; }) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await User.create(user);
  } catch (err) {
    console.log(err);
  }
};
