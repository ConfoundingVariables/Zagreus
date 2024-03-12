const jwt = require("jwt-simple");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const axios = require("axios");

module.exports.register = async (req, res, next) => {
  //Taking information for request body
  const { email, fullName, username, password } = req.body;
  let user = null;
  let token = null;
  
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
