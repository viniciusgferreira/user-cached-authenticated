import bcrypt from 'bcrypt';
import { User } from '../models/User-model';

export const createUserService = async (user: { username: string; password: string; }) => {
  try {
    console.time('hash password time');
    const hashedPassword = await bcrypt.hash(user.password, 10);
    console.timeEnd('hash password time');

    user.password = hashedPassword;
    return await User.create(user);
  } catch (err) {
    console.log(err);
  }
};
