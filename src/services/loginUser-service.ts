import bcrypt from 'bcrypt';
import { User } from '../models/User-model';
import { generateToken } from '../utils/generateToken';

export const loginUserService = async (user: { username: string; password: string; }) => {
  try {
    const userFromDb = await User.findOne({ 'username': user.username });

    // CHECK IF USER EXISTS
    if (!userFromDb) { return undefined; }

    // CHECK PASSWORD MATCH
    if (await bcrypt.compare(user.password, userFromDb.password)) {
      //GENERATE JWT
      return generateToken(userFromDb._id);
    }

    return undefined;
  } catch (err) {
    console.log(err);
  }
};
