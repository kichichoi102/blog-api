# blog-api
API For Blog Client

## MVC Architecture

## How to Build:
0. create .env file, fill out postgres port (5432), postgres password (set to whatever u want), and adminer port (8080)
1. Start Containerized Services (db and adminer)
```bash
~/blog-api$ docker compose up -d
```
2. Run Migrations
```bash
~/blog-api$ npm run migrate:up
```
2.5 Rollback Down and Migrations
```bash
~/blog-api$ npm run migrate:down
~/blog-api$ npm run migrate:rollback
```
3. Run Seeders to fill dummy data (optional)
```bash
~/blog-api$ npm run seed:run
```
4. Start API server
```bash
~/blog-api$ npm run start
```
5. To View adminer dashboard, go to browser: `http://localhost:<adminer_port>`


6. Fill in details:

- System: PostgreSQL, 
- Server: postgres
- Password: POSTGRES_PASSWORD you set in .env
- Database: leave empty