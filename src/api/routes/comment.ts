import { Router, Request, Response } from 'express';
import { comments } from './mock/comment.mock';

const route = Router();

export default (app: Router) => {
  app.use('/comments', route);

  app.get('/comments', (req: Request, res: Response) => {
    const { postId, email } = req.query;
    let commentRes = comments;

    if (postId) {
      commentRes = comments.filter(p => p.postId === (Number(postId) as number));
    } 
    if (email) {
      commentRes = commentRes.filter(p => p.email === (email as string));
    }

    res.send(commentRes).status(200);
  });

  app.get('/comments/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const comment = comments.find(c => c.id === Number(id) as number);

    if (!comment) {
      res.send(`The Comment with id: ${id} was not found`).status(404);
    }

    res.send(comment).status(200);
  });
};
