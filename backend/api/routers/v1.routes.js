const { Router } = require("express");
const { bookRouter } = require("../modules/books/books.routes");
const { userRouter } = require("../modules/user/user.routes");
const v1Router = Router();

v1Router.use('/books', bookRouter);
v1Router.use('/user', userRouter)
module.exports = { v1Router };
