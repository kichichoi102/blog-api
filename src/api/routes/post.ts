import { Router, Request, Response } from 'express';
import { posts } from './mock';

const route = Router();

export default (app: Router) => {
  app.use('/posts', route);

  app.get('/posts', (req: Request, res: Response) => {

    const { userId } = req.query
    let userPosts = []

    // userId param is optional not mandatory ya logic was broken @kihoondavidchoi
    // ya sure ur a fullstackdev...?
    if (userId) {
      userPosts = posts.filter(p => p.userId === Number(userId) as number);
    } else {
      userPosts = posts
    }

    return res.send(userPosts).status(200);
  });

  app.get('/posts/:id', (req: Request, res: Response) => {
    const { id } = req.params
    
    const post = posts.find(p => p.id === Number(id) as number);

    if (!post) {
      res.send(`The Post with id: ${req.params.id} was not found`).status(404);
    }
    
    return res.send(post).status(200);
  });
};
