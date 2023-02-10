import express from 'express';
import routes from '@/api';
import config from '@/config';

export default ({ app }: { app: express.Application }) => {
  // server vibe checkers
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // jsonify req.body-> json
  app.use(express.json());
  // load api routes
  app.use(config.api.prefix, routes());

  // expected common error handling
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
};
