import Logger from '@/loaders/logger';
import { resolveConfig } from 'prettier';

const postService = require('../service/postservice');

class PostController {
  async createPost(req, res) {
    try {
      const id = await postService.createPost(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readAllPosts(req, res) {
    try {
      const postData = await postService.readAllPosts();
      res.status(201).json(postData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  clearOffset(req, res) {
    try {
      postService.clearOffset();
      res.status(200).json([]);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }
}

module.exports = new PostController();
