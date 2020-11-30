# JS CRUD Exercise

## Tech Stack

- React JS + Redux
- Node JS
- Express JS
- PostgreSQL
- KNEXJS
- TypeScript (Front & Back End)
- Material UI
- React Table

## Overview

The bulk of this project was focused around the database integration. I decided to use Postgres and KNEXJS for an abstraction layer between me and the database.

Once that was setup, I created the REST API using TypeScript.

I decided to separate the client code into it's own project under the client folder. This was bootstrapped with create-react-app with the their TypeScript template.

From there, I went with a pretty simple Redux state management setup and leveraged MaterialUI to quickly piece the UI together. This was convenient too, since React-Table plays nicely with MaterialUI.

## Running Locally

**IMPORTANT**

You will need Postgres installed on you computer with a database named **plexxis**.

1. Install dependencies (post install script downloads client dependencies too)

```bash
npm i
```

2. Install knex in order to seed and migrate database

```bash
npm i --g knex
```

3. Migrate database

```bash
knex migrate:latest
```

4. Seed database with data

```bash
knex seed:run
```

5. Start the application

```bash
npm start
```

The client and server should now be running on ports 3000 and 8080 respectively.
