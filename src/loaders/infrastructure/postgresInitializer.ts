import logger from '../logger';

export default async client => {
  const usersTable: string = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    suite VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    lat VARCHAR(255) NOT NULL,
    lng VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    company_catchPhrase VARCHAR(255) NOT NULL,
    company_bs VARCHAR(255) NOT NULL
    );`;

  const postsTable: string = `
    CREATE TABLE IF NOT EXISTS posts (
    userId INTEGER REFERENCES users (id),
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
    );`;

  const commentsTable: string = `
    CREATE TABLE IF NOT EXISTS comments (
    postId INTEGER REFERENCES posts (id),
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
    );`;

  client
    .query(usersTable)
    .then(() => logger.info('Users Table Created Successfully!'))
    .catch(err => logger.error('Error creating User Table:', err));

  client
    .query(postsTable)
    .then(() => logger.info('Posts Table Created Successfully!'))
    .catch(err => logger.error('Error creating Posts Table:', err));

  client
    .query(commentsTable)
    .then(() => logger.info('Comments Table Created Successfully!'))
    .catch(err => logger.error('Error creating Comments Table:', err));
};
