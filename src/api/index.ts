import { Router } from 'express';
import { userRoute } from './routes/user.route';
import { commentRoute } from './routes/comment.route';
import { postRoute } from './routes/post.route';

export default () => {
  const router = Router();
  userRoute(router);
  postRoute(router);
  commentRoute(router);

  return router;
};
