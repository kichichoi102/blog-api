import logger from '../../logger';

export default async client => {
  const commentsTableExists = await client.schema.hasTable('comments');
  if (!commentsTableExists) {
    await client.schema
      .createTable('comments', table => {
        table.increments('id').primary();
        table.integer('postId').unsigned().references('id').inTable('posts');
        table.integer('userId').unsigned().references('id').inTable('users');
        table.string('name', 255).notNullable();
        table.text('body').notNullable();
      })
      .then(() => logger.info('Comments Table Created Successfully!'))
      .catch(err => logger.error(err));
  }
};
