const environment: string = process.env.NODE_ENV || "development";
const config = require("../../knexfile");
const knex = require("knex");

const connection = knex(config.default);

module.exports = connection;
