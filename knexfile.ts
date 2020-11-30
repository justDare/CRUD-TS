// Update with your config settings.

interface KnexConfig {
  [key: string]: object;
}

const knexConfig: KnexConfig = {
  development: {
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
  },
};

const env = process.env.NODE_ENV || "development";
const configOption = knexConfig[env];

export = {
  config: configOption,
};
