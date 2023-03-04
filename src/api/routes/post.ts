import { Router, Request, Response } from 'express';
import { posts } from './mock';

const postController = require('../../controller/postcontroller');
const route = Router();

export default (app: Router) => {
  app.use('/posts', route);

  app.post('/posts', postController.createPost);

  app.get('/posts', postController.readAllPosts);

  app.get('/posts/clear', postController.clearOffset);

  app.get('/posts/:userId', postController.readPostsByUserId);

  app.get('/posts/:id', postController.readPostByPostId);

  app.get('/posts/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const post = posts.find(p => p.id === (Number(id) as number));

    if (!post) {
      res.send(`The Post with id: ${req.params.id} was not found`).status(404);
    }

    return res.send(post).status(200);
  });
};
