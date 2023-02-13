import usersInitializer from './usersInitializer';
import postsInitializer from './postsInitializer';
import commentsInitializer from './commentsInitializer';

export default async client => {
    await usersInitializer(client);
    await postsInitializer(client);
    await commentsInitializer(client);
}