const { Router } = require("express");
const { bookControllers } = require("./book.controller");

const bookRouter = Router();

bookRouter.get("/", bookControllers.getAllBooks);
bookRouter.post("/create", bookControllers.createBook);
bookRouter.get("/search", bookControllers.searchBook);
bookRouter.get("/:bookId", bookControllers.getSingleBookInfo);
bookRouter.get("/category/:catName", bookControllers.getAllBookOfAParticularCategory);

module.exports = { bookRouter };
