import { createClient } from 'redis';

// REDIS CONNECTION
const client = createClient();
client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('ready', () => console.log('Redis Client connected'));

// REDIS GET
export async function getRedisValue(key: string) {
  const value = await client.get(key);
  return value;
}

// REDIS SET
export async function setRedisValue(key: string, value: string) {
  await client.set(key, value, { EX: 3600 });
}
