const createAccountRepository = require("../repositories/accountRepository.js");
const services = require("../services/common")
const db = require("../models/index")


exports.createAccount = async(req, res) => {
  const data = req.body
  const t = await db.sequelize.transaction();
  try {
    const response = await createAccountRepository.createAccount(data, t)
    const token = services.generateJwtToken({id:response.id, email:response.email})
    await t.commit()
    res.status(200).json({ok:true, message:"account created", data:{token:token}})
  } catch(error) {
    console.log(error)
    await t.rollback();
    res.status(200).json({ok:false, message:"something went wrong"})
  }
}