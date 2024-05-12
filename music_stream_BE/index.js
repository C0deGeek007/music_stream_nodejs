const db = require("./models/index")
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
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    server.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
    })
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
