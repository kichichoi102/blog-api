import { Logger } from '@/loaders/logger';
import { postService } from '@/service';

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

  async readPostByPostId(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { id } = req.params;

    try {
      const postData = await postService.readPostByPostId(id);
      if (!postData) {
        res.status(404).json(`post with id ${id} was not found`);
      }
      res.status(201).json(postData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readPostsByUserId(req, res) {
    try {
      const { userId } = req.params;
    } catch (err) {
      res.status(404).json('userId is required');
      Logger.error('userId is required');
    }
    const { userId } = req.params;

    try {
      const postData = await postService.readPostsByUserId(userId);
      if (postData.length === 0) {
        res.status(404).json(`Posts with userId ${userId} was not found`);
      }
      res.status(201).json(postData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async updatePostById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
    }

    const { id } = req.params;
    try {
      const updatedPostData = await postService.updatePostById(id, req.body);
      if (updatedPostData.length === 0) {
        res.status(404).json(`Post with ID ${id} was not found`);
        Logger.error(`Post with ID ${id} was not found`);
      } else {
        res.status(201).json(updatedPostData);
      }
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async deletePostById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
    }

    const { id } = req.params;
    try {
      const deletedPostId = await postService.deletePostById(id);
      if (deletedPostId.length === 0) {
        res.status(404).json(`Post with ID ${id} was not found`);
        Logger.error(`Post with ID ${id} was not found`);
      } else {
        res.status(201).json(deletedPostId);
      }
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }
}

export const postController = new PostController();
