import logger from '../../logger';

export default async client => {
  const commentsTableExists = await client.schema.hasTable('comments');
  if (!commentsTableExists) {
    await client.schema
      .createTable('comments', table => {
        table.integer('postId').unsigned().references('posts.id');
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.text('body').notNullable();
      })
      .then(() => logger.info('Comments Table created'))
      .catch(err => logger.error(err));
  }
};
