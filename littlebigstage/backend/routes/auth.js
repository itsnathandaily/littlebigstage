const registerValidation = require("../validation");
const loginValidation = require("../validation");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/users.model");

//REGISTER
router.post("/register", async (req, res) => {
  //validate the user
  const { error } = registerValidation.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash the passwords
  let hashPassword;
  try {
    const salt = await bcrypt.genSalt(10);
    hashPassword = await bcrypt.hash(req.body.password, salt);
  } catch (err) {
    console.log("error when attempting to hash password is ", err.message);
  }

  //create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  //post user to DB
  try {
    const { name } = await user.save();
    res.send({ user: name });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //validate the user
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // chcking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is incorrect");

  //check in password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or password is incorrect");

  //create and assign a token
const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
res.header('auth-token',token).send(token)

  res.send(`${user.name} logged in`);
});
module.exports = router;
