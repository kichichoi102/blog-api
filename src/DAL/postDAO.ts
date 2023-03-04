const postdb = require('../db/db');

class PostDAO {
  private offset: number;
  private limit: number;
  private dbName: string;

  constructor() {
    this.offset = 0;
    this.limit = 50;
    this.dbName = 'posts';
  }

  async createPost(userId, title, body) {
    const [id] = await postdb(this.dbName)
      .insert({
        userId: userId,
        title: title,
        body: body,
      })
      .returning('id');

    return id;
  }

  async readAllPosts() {
    const postData = await postdb(this.dbName).select('*').offset(this.offset).limit(this.limit);
    if (postData.length === this.limit) {
      this.offset += this.limit;
    }
    return postData;
  }

  clearOffset() {
    this.offset = 0;
    return null;
  }

  async readPostByPostId(id) {
    const postData = await postdb(this.dbName).where('id', id).first();
    return postData;
  }

  async readPostsByUserId(userId) {
    const postData = await postdb(this.dbName).where('userId', userId);
    return postData;
  }

  async updatePostById(id, postDTO) {
    const updatedPostData = await postdb(this.dbName).where('id', id).update(postDTO, 'id');
    return updatedPostData;
  }

  async deletePostById(id) {
    const deletedPostId = await postdb(this.dbName).where('id', id).del('id');
    return deletedPostId;
  }
}

module.exports = new PostDAO();
