import { Logger } from '@/loaders/logger';
import { commentService } from '@/service';

class CommentController {
  async createComment(req, res) {
    try {
      const id = await commentService.createComment(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readAllComments(req, res) {
    try {
      const commentData = await commentService.readAllComments();
      res.status(201).json(commentData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  clearOffset(req, res) {
    try {
      commentService.clearOffset();
      res.status(200).json([]);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readCommentByCommentId(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { id } = req.params;

    try {
      const commentData = await commentService.readCommentByCommentId(id);
      if (!commentData) {
        res.status(404).json(`comment with id ${id} was not found`);
      }
      res.status(201).json(commentData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readCommentsByPostId(req, res) {
    try {
      const { postId } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { postId } = req.params;

    try {
      const commentData = await commentService.readCommentsByPostId(postId);
      if (commentData.length === 0) {
        res.status(404).json(`comment with post id ${postId} was not found`);
      }
      res.status(201).json(commentData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async readCommentsByUserId(req, res) {
    try {
      const { userId } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { userId } = req.params;

    try {
      const commentData = await commentService.readCommentsByUserId(userId);
      if (commentData.length === 0) {
        res.status(404).json(`Comment with user id ${userId} was not found`);
      }
      res.status(201).json(commentData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async updateCommentById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { id } = req.params;

    try {
      const updatedCommentData = await commentService.updateCommentById(id, req.body);
      if (updatedCommentData.length === 0) {
        res.status(404).json(`Comment with id ${id} was not found`);
        Logger.error(`Comment with id ${id} was not found`);
      }
      res.status(201).json(updatedCommentData);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }

  async deleteCommentById(req, res) {
    try {
      const { id } = req.params;
    } catch (err) {
      res.status(404).json('id is required');
      Logger.error('id is required');
    }
    const { id } = req.params;

    try {
      const deletedCommentId = await commentService.deleteCommentById(id);
      if (deletedCommentId.length === 0) {
        res.status(404).json(`Comment with ID ${id} was not found`);
        Logger.error(`Comment with ID ${id} was not found`);
      }
      res.status(201).json(deletedCommentId);
    } catch (err) {
      res.status(500).json(err);
      Logger.error(err);
    }
  }
}

export const commentController = new CommentController();
