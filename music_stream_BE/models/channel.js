'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Channel.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      Channel.hasMany(models.Media, {
        foreignKey: 'channelId',
        as: 'media',
      })

      Channel.belongsToMany(models.User, {
        through: 'Subscribers',
        as: 'subscriber',
        foreignKey: 'channelId'
      });

    }
  }
  Channel.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    roomName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};