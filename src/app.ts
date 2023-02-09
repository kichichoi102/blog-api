import express from 'express';
import config from './config';

async function startServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  const port = config.port;

  app
    .listen(port, () => {
      console.log(`Listening on port: ${port}`);
    })
    .on('error', err => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
