const { v4 } = require("uuid");
const db = require("../models/index");

exports.createAccount = async (data, t) => {
  try {
    const user = await db.User.create(data, { transaction: t });
    await db.Channel.create({
      name: user.email + "_" + v4(),
      userId: user.id
    }, { transaction: t });

    return user;
  } catch (error) {
    throw error;
  }
};  