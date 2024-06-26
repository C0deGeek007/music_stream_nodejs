const path = require("path")
const db = require("./models/index")
const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');
const server = http.createServer(app);
const PORT = 3000;
const accountRoutes = require("./routes/accountRoutes");

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
app.use(express.json());
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

app.use("/account", accountRoutes)

app.get("/",async(req, res)=>{
//   // const user1 = await db.User.create({firstName:"rahul", lastName:"kumar", email:"abc@gmail.com"})
//   // const channel1 = await db.Channel.create({name:"channel of user rahul", userId:user1.id})
//   // const media1 = await db.Media.create({title:"video 1 of rahul", channelId:channel1.id})


//   // const user2 = await db.User.create({firstName:"sachin", lastName:"kumar", email:"sachin@gmail.com"})

  // const user2 = await db.User.findByPk(11);
//   const channel1 = await db.Channel.findByPk(8);
//   user2.addSubscribedChannel(channel1)

  // console.log((await user2.getSubscribedChannels({
  //   include: [
  //     {
  //       "model": db.User,
  //       "as": 'user',
  //       "attributes": ['email'] // Specify attributes you want to include
  //     }
  //   ]
  // }))[0].user.email)
  

// const channel1 = db.Channel.build({name:"channel of user1", })
//   console.log(user1.id)
//   console.log(user1.channels)
//   console.log(channel1.id)
//   console.log(channel1.userId)
  // const user_channels = await db.Channel.findAll({
  //   include: [
  //     {
  //       model: db.User,
  //       as: 'user', // Use the alias here
  //       attributes: [],
  //       where: {
  //         email:"abc@gmail.com"
  //       }
  //     }
  //   ],
  //   attributes:["name"]
  // });
  // console.log(user_channels)
  // console.log(user_channels[0].userId)
  // console.log(user_channels[0].user)

  // const queryBuilder = {
  //   include: [
  //     {
  //       model: db.Channel,
  //       as: 'channel', // Use the alias here
  //       attributes: ["name"],
  //       where:{},
  //       include:[
  //         {
  //           model: db.User,
  //           as: "user",
  //           attributes:["email"],
  //           where: {
  //             email:"abc@gmail.com"
  //           }
  //         }
  //       ],
  //     }
  //   ],
  //   attributes:["title"]
  // }
  // const videos = await db.Media.findAll(queryBuilder);

  // console.log(videos)
  // console.log(videos[0].channel)
  // console.log(videos[0].channel.user)

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

