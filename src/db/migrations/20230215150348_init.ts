import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Create new Users Table if it doesn't exist
  const usersTableExists = await knex.schema.hasTable('users');
  if (!usersTableExists) {
    await knex.schema
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('username', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('street', 255).notNullable();
        table.string('suite', 255).notNullable();
        table.string('city', 255).notNullable();
        table.string('zipcode', 255).notNullable();
        table.string('lat', 255).notNullable();
        table.string('lng', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.string('website', 255).notNullable();
        table.timestamps(true, true);
      })
      .then(() => console.log('Users Table Created Successfully!'))
      .catch(err => console.log(err));
  }
  // Create new Posts Table if it doesn't exist
  const postsTableExists = await knex.schema.hasTable('posts');
  if (!postsTableExists) {
    await knex.schema
      .createTable('posts', table => {
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('body').notNullable();
        table.timestamps(true, true);
      })
      .then(() => console.log('Posts Table Created Successfully!'))
      .catch(err => console.log(err));
  }
  // Create new Comments Table if it doesn't exist
  const commentsTableExists = await knex.schema.hasTable('comments');
  if (!commentsTableExists) {
    await knex.schema
      .createTable('comments', table => {
        table.increments('id').primary();
        table.integer('post_id').unsigned().references('id').inTable('posts');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.string('name', 255).notNullable();
        table.text('body').notNullable();
        table.timestamps(true, true);
      })
      .then(() => console.log('Comments Table Created Successfully!'))
      .catch(err => console.log(err));
  }
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('comments');
  knex.schema.dropTable('posts');
  knex.schema.dropTable('users');
}
