'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// ffmpeg -i input.mp3 -c:a copy -f hls -hls_time 10 -hls_list_size 0 output.m3u8
// ffmpeg -i BigBuckBunny.mp4 -c:v copy -c:a copy -f segment -segment_time 5 -segment_list playlist.m3u8 output%03d.ts
// ffmpeg -i input.mp3 -c:a aac -b:a 128k output.aac
// ffmpeg -i output.aac -f hls -hls_time 10 -hls_list_size 0 output.m3u8

