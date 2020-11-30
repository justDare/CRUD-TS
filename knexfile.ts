// Update with your config settings.

const knexConfig = {
  client: "pg",
  connection: "postgres://localhost/plexxis",
  migrations: {
    directory: "./server/db/migrations",
    extension: "ts",
  },
  seeds: {
    directory: "./server/db/seeds",
    extension: "ts",
  },
};

export default knexConfig;
