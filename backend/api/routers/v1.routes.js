const { Router } = require("express");
const { bookRouter } = require("../modules/books/books.routes");
const v1Router = Router();

v1Router.use('/books', bookRouter);

module.exports = { v1Router };
