const Joi = require('joi');

const createAccountSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName:Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
}).required();

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error)
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

module.exports = {
  createAccountSchema,
  validateRequest
};
