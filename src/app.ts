import express from 'express';
import config from './config';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();
  // call loader services
  await require('./loaders').default({ expressApp: app });

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  const PORT = config.port || 4000;

  app
    .listen(PORT, () => {
      Logger.info(`
      ##############################
      Server listening on port: ${PORT} 
      ##############################
      `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
