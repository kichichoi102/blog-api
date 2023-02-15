import client from './infrastructure/client';
import initializer from './infrastructure/initializers/index';
import seeder from './infrastructure/seeders/index'
import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }) => {
  // await initializer(client);
  // await seeder(client)

  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded');
};
