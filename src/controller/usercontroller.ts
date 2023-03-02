import Logger from '@/loaders/logger';

const userService = require('../service/userservice');

class UserController {
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readAllUsers(req, res) {
    try {
      const userData = await userService.readAllUsers();
      res.status(201).json(userData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  clearOffset(req, res) {
    try {
      userService.clearOffset();
      res.status(200).json([]);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readUserById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
    }

    const { id } = req.params;

    try {
      const userData = await userService.readUserById(id);
      if (!userData) {
        res.status(404).json(`User with id ${id} was not found`);
      }
      res.status(201).json(userData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async updateUserById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
    }

    const { id } = req.params;
    try {
      const updatedUserData = await userService.updateUserById(id, req.body);
      res.status(201).json(updatedUserData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }
}

module.exports = new UserController();
