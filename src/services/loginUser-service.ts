import bcrypt from 'bcrypt';
import { User } from '../models/User-model';

export const loginUserService = async (user: { username: string; password: string; }) => {
  try {
    const userFromDb = await User.findOne({ 'username': user.username });

    // CHECK IF USER EXISTS
    if (!userFromDb) { return false; }

    // CHECK PASSWORD MATCH
    if (await bcrypt.compare(user.password, userFromDb.password)) {
      //GENERATE JWT
      return true;
    }



    return false;
  } catch (err) {
    console.log(err);
  }
};
