const { Router } = require("express");
const { userControllers } = require("./user.controller")
const userRouter = Router();

userRouter.get("/", userControllers.register);

module.exports = { userRouter };
