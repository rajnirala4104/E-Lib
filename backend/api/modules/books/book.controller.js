const { asyncHandler } = require("../../utils/asynHandler");
const bookData = require("../../data/dummyBookData.json");
const { Books } = require("./book.model");
const { StatusCodes } = require("http-status-codes");
const { ApiResponse } = require("../../utils/apiResponse");
const { ApiError } = require("../../utils/apiError");

const bookControllers = {
   getAllBooks: asyncHandler(async (req, res) => {
      const booksFromDatabase = await Books.find();
      if (booksFromDatabase.length === 0) {
         const insertQuery = await Books.insertMany(bookData);
         return res
            .status(StatusCodes.CREATED)
            .json(
               new ApiResponse(
                  StatusCodes.CREATED,
                  insertQuery,
                  "here all the books",
               ),
            );
      }

      return res.status(StatusCodes.OK).json(
         new ApiResponse(
            StatusCodes.OK,
            {
               books: [...booksFromDatabase],
            },
            "here all the Books",
         ),
      );
   }),
   getSingleBookInfo: asyncHandler(async (req, res) => {
      const { bookId } = req.params;
      const book = await Books.findOne({ _id: bookId });
      if (!book) {
         throw new ApiError(StatusCodes.NOT_FOUND, "book is not available");
      }

      return res.status(StatusCodes.OK).json(
         new ApiResponse(
            StatusCodes.OK,
            {
               book,
            },
            "single book information",
         ),
      );
   }),
   getAllBookOfAPerticularCategory: asyncHandler(async (req, res) => {
      const { category } = req.body;

      if (!category) {
         throw new ApiError(StatusCodes.NOT_FOUND, "category is neccessary");
      }

      const books = await Books.find({ category: { $in: [category] } });

      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.OK,
               books,
               `here all book ${category} books`,
            ),
         );
   }),
};

module.exports = { bookControllers };
