import { postController } from '@/controller';
import { Router, Request, Response } from 'express';
import { posts } from './mock';

const route = Router();

export const postRoute = (app: Router) => {
  app.use('/posts', route);

  app.post('/posts', postController.createPost);

  app.get('/posts', postController.readAllPosts);

  app.get('/posts/clear', postController.clearOffset);

  app.get('/posts/:id', postController.readPostByPostId);

  app.get('/posts/userId/:userId', postController.readPostsByUserId);

  app.patch('/posts/:id', postController.updatePostById);

  app.delete('/posts/:id', postController.deletePostById);
};
