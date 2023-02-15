# blog-api
API For Blog Client

## MVC Architecture

## How to Build:
0. create .env file, fill out postgres port (5432), postgres password (set to whatever u want), and adminer port (8080)
1. `~/blog-api$ docker compose up -d`
2. `~/blog-api$ knex migrate:latest --knexfile ./src/db/knexfile.ts`
3. `~/blog-api$ npm run start` 
4. To View adminer dashboard, go to browser: `http://localhost:<adminer_port>`
5. Fill in details:
- System: PostgreSQL, 
- Server: postgres
- Password: POSTGRES_PASSWORD you set in .env
- Database: leave empty

