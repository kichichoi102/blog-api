import commentSeeder from './commentSeeder';
import postSeeder from './postSeeder';
import userSeeder from './userSeeder';

export default async client => {
  await userSeeder(client);
  await postSeeder(client);
  // await commentSeeder(client);
};
