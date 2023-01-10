import { createClient } from 'redis';

// REDIS CONNECTION
const client = createClient();
client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));

// REDIS GET
export async function getRedisValue(key: string) {
  const value = await client.get(key);
  return value;
}
