const { Router } = require("express");
const { bookControllers } = require("./book.controller");
const bookRouter = Router();

bookRouter.get("/", bookControllers.getAllBooks);
bookRouter.get("/:bookId", bookControllers.getSingleBookInfo);
bookRouter.post(
   "/books-by-category",
   bookControllers.getAllBookOfAPerticularCategory,
);

module.exports = { bookRouter };
