import dotenv from 'dotenv';

enum ENV_TYPE {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

process.env.NODE_ENV = process.env.NODE_ENV || ENV_TYPE.DEVELOPMENT;

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Couldn't find .env file ");
}

export default {
  port: parseInt(process.env.PORT, 10),
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },
  api: {
    prefix: process.env.PREFIX || '/api',
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER || 'postgres',
    postgres_port: process.env.POSTGRES_PORT || 5432,
    password: process.env.POSTGRES_PASSWORD,
    adminer_port: process.env.ADMINER_PORT || 8080,
  }
};
