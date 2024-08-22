const { Router } = require("express");
const { cartControllers } = require("./cart.controllers");
const cartRouter = Router();

cartRouter.get("/", (req, res) => {});

module.exports = { cartRouter };
