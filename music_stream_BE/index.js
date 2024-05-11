require("dotenv").config();
const env = process.env;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(env.DATABASE, env.DB_USER_NAME, env.PASSWORD, {
  host: env.HOST,
  dialect: "postgres",
});
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.get("/",(req, res)=>{
    res.send("hello")
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    server.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
