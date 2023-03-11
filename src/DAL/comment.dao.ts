import { devDB as commentdb } from '@/db';

class CommentDAO {
  private offset: number;
  private limit: number;
  private tableName: string;

  constructor() {
    this.offset = 0;
    this.limit = 50;
    this.tableName = 'comments';
  }

  async createComment(postId, userId, name, body) {
    const [id] = await commentdb(this.tableName)
      .insert({
        postId: postId,
        userId: userId,
        name: name,
        body: body,
      })
      .returning('id');

    return id;
  }

  async readAllComments() {
    const commentData = await commentdb(this.tableName).select('*').offset(this.offset).limit(this.limit);
    if (commentData.length === this.limit) {
      this.offset += this.limit;
    }
    return commentData;
  }

  clearOffset() {
    this.offset = 0;
  }

  //   read by commentid, postid, userid
  async readCommentByCommentId(id) {
    return await commentdb(this.tableName).where('id', id).first();
  }

  async readCommentsByPostId(postId) {
    return await commentdb(this.tableName).where('postId', postId);
  }

  async readCommentsByUserId(userId) {
    return await commentdb(this.tableName).where('userId', userId);
  }

  async updateCommentById(id, commentDTO) {
    return await commentdb(this.tableName).where('id', id).update(commentDTO, 'id');
  }

  async deleteCommentById(id) {
    return await commentdb(this.tableName).where('id', id).del('id')
  }
}

export const commentDAO = new CommentDAO();
