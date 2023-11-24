const asyncHandler = require("express-async-handler");
const bookControllers = {
   getBooksData: asyncHandler(async (req, res) => {}),
   getSingleBookById: asyncHandler(async (req, res) => {}),
   insertBookInTheDatabase: asyncHandler((req, res) => {}),
   updateBookData: asyncHandler(async (req, res) => {}),
   deleteBookFromTheDatabase: asyncHandler(async (req, res) => {}),
};

module.exports = {bookControllers}