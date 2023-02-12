import client from './postgres';
import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }) => {
  await client.connect();

  const res = await client.query('SELECT $1::text as message', ['Hello world!']);
  console.log(res.rows[0].message);

  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded');
};
