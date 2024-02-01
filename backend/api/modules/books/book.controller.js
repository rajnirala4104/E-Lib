const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { BookModle } = require("./book.model");
const { LOGGER } = require("../../common/logger");
const { Books } = require('../../database/dummyData.json')

const bookControllers = {
   getBooksData: asyncHandler(async (req, res) => {
      try {
         const books = await BookModle.find({})
         if (books.length === 0) {
            await insertMany(Books)
            return res.status(StatusCodes.CREATED).json({
               message: "inserted all books",
               status: StatusCodes.CREATED,
               data: books
            })
         }
         return res.status(StatusCodes.OK).json({
            message: "ok",
            status: StatusCodes.OK,
            data: books,
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
   insertBookInTheDatabase: asyncHandler(async (req, res) => {
      try {
         const { name, description, author, type, BookImage, price, discountPrice } = req.body;
         if (!name || !description || !author || !type || !BookImage || !price || !discountPrice) {
            return res.status(StatusCodes.BAD_REQUEST).json({
               message: "Oops!! bad data given",
               status: StatusCodes.BAD_REQUEST,
               data: null
            })
         }

         const existBook = await BookModle.findOne({ name, description, BookImage })
         if (existBook) {
            return res.status(StatusCodes.BAD_REQUEST).json({
               message: "data is already in our database",
               data: null
            })
         }

         const insertQuary = await BookModle.insertMany({ name, description, author, type, BookImage, price, discountPrice })
         return res.status(StatusCodes.OK).json({
            message: "data inserted successfully",
            status: StatusCodes.OK,
            data: insertQuary
         })

      } catch (error) {

         LOGGER.error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR}, Oops something went wrong`)
         res.status(StatusCodes.INTERNAL_SERVER_ERROR);
         throw new Error("something went wrong")

      }
   }),
   updateBookData: asyncHandler(async (req, res) => {
      try {
         const { id } = req.params;
         const data = req.body;
         const bookExist = await BookModle.findOne({ _id: id })
         if (bookExist) {
            await BookModle.findByIdAndUpdate(bookId.id, data)
            return res.status(StatusCodes.OK).json({
               message: "book updated successfully ",
               status: StatusCodes.OK,
               data: await BookModle.findOne({ _id: bookId.id })
            })
         }
      } catch (error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR)
         LOGGER.error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR}, - can't update data`)
         throw new Error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR}, - ${error}`)
      }
   }),
   deleteBookFromTheDatabase: asyncHandler(async (req, res) => {
      try {
         const { id } = req.params;
         const bookExist = await BookModle.findOne({ _id: id });
         if (bookExist) {
            await BookModle.findByIdAndDelete({ _id: id });
            return res.status(StatusCodes.OK).json({
               message: "deleted successfully",
               data: bookExist
            })
         } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
               message: "entity is not exist in our database",
               data: null
            })
         }
      } catch (error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR)
         LOGGER.error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR}, - can't delete data`);
         throw new Error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR}, - ${error}`)
      }
   }),
};

module.exports = { bookControllers };
