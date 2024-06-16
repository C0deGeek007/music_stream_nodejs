const express = require("express");
const accountController = require("../controllers/accountController.js");
const router = express.Router();
const {createAccountSchema, validateRequest} = require("../validator/inputValidator")

router.post("/", validateRequest(createAccountSchema), accountController.createAccount)

module.exports = router