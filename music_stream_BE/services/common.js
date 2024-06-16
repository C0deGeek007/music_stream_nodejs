const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
const env = process.env;

exports.generateJwtToken = (user) =>{
  const token = jwt.sign(
    user, 
    env.SECRET,
  );
  return token
}