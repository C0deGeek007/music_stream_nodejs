const path = require("path")
const db = require("./models/index")
const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');
const server = http.createServer(app);
const PORT = 3000;

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



app.use(cors());
app.use("/static", express.static(path.join(__dirname, 'public'),{
  setHeaders: (res, filePath) => {
    // Determine the content type based on file extension
    let contentType = "video/mp2t"
    if(filePath.includes("playlist.m3u8")) {
      contentType = "audio/x-mpegurl";
    }

    // Set the Content-Type header
    res.setHeader('Content-Type', contentType);
  }
}));

app.get("/",async(req, res)=>{
//   const user1 = await db.User.create({firstName:"rahul", lastName:"kumar"})
//   const channel1 = await db.Channel.create({name:"channel of user1", userId:user1.id})
// // const channel1 = db.Channel.build({name:"channel of user1", })
//   console.log(user1.id)
//   console.log(user1.channels)
//   console.log(channel1.id)
//   console.log(channel1.userId)
//   const user_channels = await db.Channel.findAll({
//     include: [
//       {
//         model: db.User,
//         as: 'user' // Use the alias here
//       }
//     ]
//   });
//   console.log(user_channels)

// const user = await db.User.findByPk(7, {
//   include: {
//     model: db.Channel,
//     as: 'channels' // Assuming you've set up the alias 'channels' for the association
//   }
// });

// console.log(user)
// console.log(user.channels)

  res.send("hello")
});



// const express = require('express');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public'),{
//   setHeaders: (res, filePath) => {
//     // Determine the content type based on file extension
//     let contentType = "video/mp2t"
//     if(filePath.includes("playlist.m3u8")) {
//       contentType = "audio/x-mpegurl";
//     }

//     // Set the Content-Type header
//     res.setHeader('Content-Type', contentType);
//   }
// }));

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

