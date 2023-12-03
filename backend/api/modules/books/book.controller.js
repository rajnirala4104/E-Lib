const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { BookModle } = require("./book.model");
const bookControllers = {
   getBooksData: asyncHandler(async (req, res) => {
      try {
         return res.status(StatusCodes.OK).json({
            message: "ok",
            status: StatusCodes.OK,
            data: await BookModle.find({}),
         });
      } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal server serevr",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            data: null,
         });
      }
   }),
   getSingleBookById: asyncHandler(async (req, res) => {
      try {
         const { id } = req.params;
         const response = await BookModle.findById({ _id: id });
         return res.status(StatusCodes.OK).json({
            message: "ok",
            status: StatusCodes.OK,
            data: response,
         });
      } catch (error) {
         return res.status(StatusCodes.OK).json({
            message: error,
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            data: null,
         });
      }
   }),
   insertBookInTheDatabase: asyncHandler((req, res) => {}),
   updateBookData: asyncHandler(async (req, res) => {}),
   deleteBookFromTheDatabase: asyncHandler(async (req, res) => {}),
};

module.exports = { bookControllers };
