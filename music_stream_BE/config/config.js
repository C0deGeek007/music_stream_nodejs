const dotenv = require("dotenv");
dotenv.config();
const env = process.env;

module.exports = {
  development:{
    username: env.DB_USER_NAME,
    password: env.PASSWORD, 
    database: env.DATABASE,
    host: env.HOST,
    dialect: "postgres"
  },
  test:{
    username: env.DB_USER_NAME,
    password: env.PASSWORD, 
    database: env.DATABASE,
    host: env.HOST,
    dialect: "postgres"
  },
  production: {
    username: env.DB_USER_NAME,
    password: env.PASSWORD, 
    database: env.DATABASE,
    host: env.HOST,
    dialect: "postgres"
  },
}
