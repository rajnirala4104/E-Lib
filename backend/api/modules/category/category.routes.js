const { Router } = require("express");
const { categoryControllers } = require("./category.controller");

const categoryRoute = Router();
categoryRoute.get("/", categoryControllers.getAllCategory);

module.exports = { categoryRoute };
