import dotenv from 'dotenv';

enum ENV_TYPE {
  DEVELOPMENT = "DEVELOPMENT",
  PRODUCTION = "PRODUCTION"
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
};
