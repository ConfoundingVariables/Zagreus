const express = require("express");
const authRouter = express.Router();
const {
  loginAuthentication,
  register,
  requireAuth,
  changePassword,
} = require("../controllers/authController");

authRouter.post("/login", loginAuthentication);
authRouter.post("/register", register);

module.exports = authRouter;
