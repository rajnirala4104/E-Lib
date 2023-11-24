const { Router } = require("express")
const { bookControllers } = require("./book.controller")
const bookRouter = Router()

bookRouter.get('/', bookControllers.getBooksData)
bookRouter.get('/:id', bookControllers.getSingleBookById)
bookRouter.post('/', bookControllers.insertBookInTheDatabase)
bookRouter.put('/:id', bookControllers.updateBookData)
bookRouter.delete(':id', bookControllers.deleteBookFromTheDatabase)

module.exports = { bookRouter }