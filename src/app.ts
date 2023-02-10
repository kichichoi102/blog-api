import express from 'express';
import config from './config';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  const port = config.port;

  app
    .listen(port, () => {
      Logger.info(`
      ##############################
      Server listening on port: ${config.port} 
      ##############################
      `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
