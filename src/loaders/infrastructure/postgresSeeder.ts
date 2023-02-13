import logger from '../logger';

export default async client => {
  const userSeedData = `
    INSERT INTO users (name, email, age)
    VALUES
    ('John Doe', 'john.doe@example.com', 30),
    ('Jane Doe', 'jane.doe@example.com', 25),
    ('Jim Smith', 'jim.smith@example.com', 35);
`;
};
