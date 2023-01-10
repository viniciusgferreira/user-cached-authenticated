import { User } from '../models/User-model';
import { getRedisValue, setRedisValue } from '../utils/redisServer';


export const listUserById = async (id: string) => {

  // BEGINNING OF SEARCH
  console.time('User search');
  // GET FROM CACHE IF EXISTS
  let user = await getRedisValue(id);
  if (user) {
    console.log('user found in Cache');
    user = JSON.parse(user);
  } else {
    try {
      // GET FROM DB
      user = await User.findById(id);
      if (user) {
        console.log('user found in DB');
        // ADD TO REDIS CACHE
        setRedisValue(id, JSON.stringify(user));
      } else {
        console.log('user not found');
        user = null;
      }
    } catch (err) {
      user = null;
      if (err instanceof Error) {
        console.log(`error on db search: ${err.message}`);
      }
    }
  }
  // END OF SEARCH
  console.timeEnd('User search');
  return user;
};
