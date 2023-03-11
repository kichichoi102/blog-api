import { devDB as postdb } from '@/db';

class PostDAO {
  private offset: number;
  private limit: number;
  private tableName: string;

  constructor() {
    this.offset = 0;
    this.limit = 50;
    this.tableName = 'posts';
  }

  async createPost(userId, title, body) {
    const [id] = await postdb(this.tableName)
      .insert({
        userId: userId,
        title: title,
        body: body,
      })
      .returning('id');

    return id;
  }

  async readAllPosts() {
    const postData = await postdb(this.tableName).select('*').offset(this.offset).limit(this.limit);
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
    const postData = await postdb(this.tableName).where('id', id).first();
    return postData;
  }

  async readPostsByUserId(userId) {
    const postData = await postdb(this.tableName).where('userId', userId);
    return postData;
  }

  async updatePostById(id, postDTO) {
    const updatedPostData = await postdb(this.tableName).where('id', id).update(postDTO, 'id');
    return updatedPostData;
  }

  async deletePostById(id) {
    const deletedPostId = await postdb(this.tableName).where('id', id).del('id');
    return deletedPostId;
  }
}

export const postDAO = new PostDAO();
