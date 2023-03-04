import { userController } from '@/controller';
import { Router, Request, Response } from 'express';

const route = Router();

export const userRoute = (app: Router) => {
  app.use('/users', route);

  // create user
  app.post('/users', userController.createUser);

  // read all users
  app.get('/users', userController.readAllUsers);

  // clear offset value from getall
  app.get('/users/clear', userController.clearOffset);

  // read user by id
  app.get('/users/:id', userController.readUserById);

  // update user, find by id
  app.patch('/users/:id', userController.updateUserById);

  // delete user by id
  app.delete('/users/:id', userController.deleteUserById);
};
