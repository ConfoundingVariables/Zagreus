const express = require("express");
const authRouter = express.Router();
const {
  login,
  register,
  requireAuth,
  changePassword,
} = require("../controllers/authController");

authRouter.post("/login", login);
authRouter.post("/register", register);

module.exports = authRouter;
