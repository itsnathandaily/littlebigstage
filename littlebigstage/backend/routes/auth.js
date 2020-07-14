const registerValidation = require("../registerValidation");
const loginValidation = require("../loginValidation");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/users.model");

//REGISTER
router.post("/register", async (req, res) => {
  console.log("inside register router", req.body)
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
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  //post user to DB
  try {
    const { username } = await user.save();
    res.send({ user: username });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  console.log('login req.body :', req.body)

  try {
    //validate the user
    const { error } = loginValidation.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the username exists
    const user = await User.findOne({ username: req.body.username });
    console.log('username')
    if (!user) return res.status(400).send("username or password is incorrect");

    //check in password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    console.log("pasword")
    if (!validPass) return res.status(400).send("username or password is incorrect");

    //create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)

    res.send(`${user.username} logged in`);
  } catch (error) {
    res.status(400).send('Hello it is an', err);
  }

});
module.exports = router;
