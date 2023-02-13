import logger from '../../logger';

export default async client => {
  const usersTableExists = await client.schema.hasTable('users');
  if (!usersTableExists) {
    await client.schema
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
      })
      .then(() => logger.info('Users Table Created Successfully!'))
      .catch(err => logger.error(err));
  }
};
