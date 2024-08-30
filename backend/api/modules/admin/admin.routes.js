const { Router } = require("express");
const { adminControllers } = require("./admin.controller");

const adminRouter = Router();
adminRouter.post("/registration", adminControllers.adminRegistration);
adminRouter.post("/login", adminControllers.login);
adminRouter.post("/logout", adminControllers.logout);

module.exports = { adminRouter };
