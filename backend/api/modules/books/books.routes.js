const { Router } = require("express");
const { bookControllers } = require("./book.controller");
const bookRouter = Router();

bookRouter.get("/", bookControllers.getAllBooks);
bookRouter.get("/:bookId", bookControllers.getSingleBookInfo);
bookRouter.get(
   "/category/:catName",
   bookControllers.getAllBookOfAPerticularCategory,
);

module.exports = { bookRouter };
