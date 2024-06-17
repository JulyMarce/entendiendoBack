const config = require("dotenv");

config.config();

const promise = require ("bluebird");
const option = {
  promiseLib: promise,
  query: (e) => {},
};

const pgp = require("pg-promise")(option);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
  return stringValue;
});

const databaseConfig = {
  host: process.env.DB_HOTS,
  port: parseInt(process.env.DB_PORT,10),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};
const bd = pgp(databaseConfig);

module.exports = bd;
