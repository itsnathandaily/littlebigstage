const Joi = require("@hapi/joi");

const registerValidation = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

/* const loginValidation = Joi.object({
  username: Joi.string().min(6).required(),
  // email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
}); */


module.exports = registerValidation


