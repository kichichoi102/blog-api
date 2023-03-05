import { Router, Request, Response } from 'express';
import { comments } from './mock/comment.mock';
import { commentController } from '@/controller';

const route = Router();

export const commentRoute = (app: Router) => {
  app.use('/comments', route);

  app.post('/comments', commentController.createComment);

  app.get('/comments', commentController.readAllComments);

  app.get('/comments/clear', commentController.clearOffset);

  app.get('/comments/:id', commentController.readCommentByCommentId);

  app.get('/comments/postId/:postId', commentController.readCommentsByPostId);

  app.get('/comments/userId/:userId', commentController.readCommentsByUserId);

  app.patch('/comments/:id', commentController.updateCommentById);

  app.delete('/comments/:id', commentController.deleteCommentById);
};
