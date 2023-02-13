import logger from '../../logger';

export default async client => {
  const postsTableExists = await client.schema.hasTable('posts');
  if (!postsTableExists) {
    await client.schema
      .createTable('posts', table => {
        table.integer('userId').unsigned().references('users.id');
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('body').notNullable();
      })
      .then(() => logger.info('Posts Table Created Successfully!'))
      .catch(err => logger.error(err));
  }
};
