import { commentDAO } from '@/DAL';

class CommentService {
  async createComment(commentDTO) {
    const { postId, userId, name, body } = commentDTO;
    return await commentDAO.createComment(postId, userId, name, body);
  }

  async readAllComments() {
    return await commentDAO.readAllComments();
  }

  clearOffset() {
    return commentDAO.clearOffset();
  }

  async readCommentByCommentId(id) {
    return await commentDAO.readCommentByCommentId(id);
  }

  async readCommentsByPostId(postId) {
    return await commentDAO.readCommentsByPostId(postId);
  }

  async readCommentsByUserId(userId) {
    return await commentDAO.readCommentsByUserId(userId);
  }

  async updateCommentById(id, commentDTO) {
    return await commentDAO.updateCommentById(id, commentDTO);
  }

  async deleteCommentById(id) {
    return await commentDAO.deleteCommentById(id);
  }
}

export const commentService = new CommentService();
