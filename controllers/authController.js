const jwt = require("jwt-simple");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const axios = require("axios");

const {
  validateEmail,
  validateFullName,
  validateUsername,
  validatePassword,
} = require("../utils/validation");

module.exports.register = async (req, res, next) => {
  //Taking information for request body
  const { email, fullName, username, password } = req.body;
  let user = null;
  let token = null;
  //server side validation
  const usernameError = validateUsername(username);
  if (usernameError) return res.status(400).send({ error: usernameError });

  const fullNameError = validateFullName(fullName);
  if (fullNameError) return res.status(400).send({ error: fullNameError });

  const emailError = validateEmail(email);
  if (emailError) return res.status(400).send({ error: emailError });

  const passwordError = validatePassword(password);
  if (passwordError) return res.status(400).send({ error: passwordError });

  try {
    token = crypto.randomBytes(20).toString("hex");
    user = new User({ email, fullName, username, password, token });
    await user.save();
    res.status(201).send({
      user: {
        email: user.email,
        username: user.username,
      },
      token: jwt.encode({ id: user.id }, process.env.JWT_SECRET),
    });
  } catch (err) {
    next(err);
  }
};
