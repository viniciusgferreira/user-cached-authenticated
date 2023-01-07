import { User } from '../models/User-model';


export const listUsers = async () => {
  try {
    return await User.find();
  } catch (err) {
    console.log(err);
  }
};
