## Coffix

Coffix is an e-commerce store built using Next.js, TypeScript, and JavaScript. The site sells high-quality Italian coffee beans. For styling, we used SCSS, while Playwright was used for end-to-end tests and Jest for unit tests. The webstore was deployed on fly.io, as you can see in the provided link.

## Tech Stack

- Next.js
- PostgreSQL
- Playwright
- SCSS
- Jest

### Languages:

- JavaScript
- JSX
- TypeScript
- TSX

## Screenshots:

## Setup instructions!

1. Clone the project on your local machine (run each line individually):

```bash
git clone <url>
cd <repo name>
yarn
```

2. Connect to default database as admin:

- On Windows

```bash
psql -U postgres
```

- On macOS

```bash
psql postgres
```

- On Linux

```bash
sudo -u postgres psql
```

3. Set up the database:

```bash
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD <user password>;
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

4. After queries are successfully ran, quit `psql` and connect to the database

```bash
\q
```

- On Windows & macOS

```bash
psql -U <user name> <database name>
```

- On Linux

```bash
sudo -u <user name> psql -U <user name> <database name>
```

5. In the repository's directory, run migrations using ley:

```bash
yarn migrate up
```

6. Create a .env file:

- Open the project in your code editor
- Copy the content of the .env.example file into the .env file
- Replace xxxxxxxx with the access information
- add .env file to .gitignore

7. (Optional) Start deployment server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
