import client from './infrastructure/postgresClient';
import initializer from './infrastructure/postgresInitializer';
import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }) => {
  await client.connect();
  await initializer(client);

  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded');
};
