import { Router } from 'express';
import user from './routes/user';
import post from './routes/post';
import comment from './routes/comment';

export default () => {
  const router = Router();
  user(router);
  post(router);
  comment(router);

  return router;
};
