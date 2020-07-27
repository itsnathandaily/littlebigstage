const Joi = require("@hapi/joi");



const loginValidation = Joi.object({
  username: Joi.string().required(),
  // email: Joi.string().min(6).required().email(),
  password: Joi.string().required(),
});



module.exports = loginValidation