import expressLoader from './express';
import { Logger } from './logger';

export default async ({ expressApp }) => {
  // Register express server, default routes
  await expressLoader({ app: expressApp });
  Logger.info('Express Loaded');
};
