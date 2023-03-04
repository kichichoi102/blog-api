const postDAO = require('../DAL/postDAO');

class PostService {
  async createPost(postDTO) {
    const { userId, title, body } = postDTO;
    return await postDAO.createPost(userId, title, body);
  }

  async readAllPosts() {
    return await postDAO.readAllPosts();
  }

  clearOffset() {
    return postDAO.clearOffset()
  }
}

module.exports = new PostService();
