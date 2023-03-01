import { Router, Request, Response } from 'express';
import { users } from './mock';

const userController = require('../../controller/users')
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  app.get('/users', (req: Request, res: Response) => {
    return res.send(users).status(200);
  });

  app.get('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params

    const user = users.find(u => u.id === Number(id) as number);

    if (!user) {
      res.send(`The User with id ${id} was not found`).status(404);
    }

    return res.send(user).status(200);
  });

  app.post('/users', userController.createUser)
};
