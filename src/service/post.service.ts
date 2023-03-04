import { postDAO } from '@/DAL';

class PostService {
  async createPost(postDTO) {
    const { userId, title, body } = postDTO;
    return await postDAO.createPost(userId, title, body);
  }

  async readAllPosts() {
    return await postDAO.readAllPosts();
  }

  clearOffset() {
    return postDAO.clearOffset();
  }

  async readPostByPostId(id) {
    return await postDAO.readPostByPostId(id);
  }

  async readPostsByUserId(userId) {
    return await postDAO.readPostsByUserId(userId);
  }

  async updatePostById(id, postDTO) {
    return await postDAO.updatePostById(id, postDTO);
  }

  async deletePostById(id) {
    return await postDAO.deletePostById(id);
  }
}

export const postService = new PostService();
