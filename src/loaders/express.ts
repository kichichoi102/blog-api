import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import routes from '@/api';
import config from '@/config';

export default ({ app }: { app: express.Application }) => {
  // server vibe checkers
  app.get('/status', (req, res) => {
    res.status(200).json({ message: 'OK' }).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(bodyParser.json());

  // jsonify req.body-> json
  app.use(express.json());
  // load api routes
  app.use(config.api.prefix, routes());

  // expected common error handling
  // Endpoint not found handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });
  // Unauthorized Handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  // Catch All server error handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json();
  });
};
