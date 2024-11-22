const { asyncHandler } = require("../../utils/asyncHandler");
const bookData = require("../../data/dummyBookData.json");
const { Books } = require("./book.model");
const { StatusCodes } = require("http-status-codes");
const { ApiResponse } = require("../../utils/apiResponse");
const { ApiError } = require("../../utils/apiError");
const { capitalize } = require("../../utils/capitalizeText");

const bookControllers = {
   /**
    * This is a controller for getting all the books.
    * It uses the `Books` model to query the database.
    * If the database is empty, it inserts the dummy data from `bookData.json` into the database.
    * After inserting data, it returns a JSON response with the inserted data.
    * If the database is not empty, it returns all the books from the database.
    */
   getAllBooks: asyncHandler(async (req, res) => {
      /**
       * First, we query the database to get all the books.
       * We use the `lean()` method to get the data in a lean format.
       */
      const booksFromDatabase = await Books.find().lean();

      /**
       * If the database is empty, we insert the dummy data.
       * We use the `insertMany()` method to insert multiple documents at once.
       */
      if (booksFromDatabase.length === 0) {
         const insertQuery = await Books.insertMany(bookData);

         /**
          * After inserting data, we return a JSON response with the inserted data.
          * We use the `ApiResponse` class to create a response object with the status code, data and message.
          */
         return res
            .status(StatusCodes.CREATED)
            .json(
               new ApiResponse(
                  StatusCodes.CREATED,
                  {
                     books: [...insertQuery],
                  },
                  "here all the books",
               ),
            );
      }

      /**
       * If the database is not empty, we return all the books from the database.
       * We use the `ApiResponse` class to create a response object with the status code, data and message.
       */
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
   /**
    * This is a controller for getting a single book's information.
    * It takes the book's id from the request parameters.
    * It queries the database to find the book with the given id.
    * If the book is not found, it throws an ApiError with a 404 status code and a message.
    * If the book is found, it returns a JSON response with the book's information.
    * The response object is created using the ApiResponse class.
    * The ApiResponse class takes three parameters: the status code, the data and the message.
    * The status code is set to 200, the data is set to the book object and the message is set to "single book information".
    */
   getSingleBookInfo: asyncHandler(async (req, res) => {
      const { bookId } = req.params;
      /**
       * We query the database to find the book with the given id.
       * We use the findOne() method to find a single document that matches the given id.
       */
      const book = await Books.findOne({ _id: bookId });

      /**
       * If the book is not found, we throw an ApiError with a 404 status code and a message.
       * The ApiError class takes two parameters: the status code and the message.
       */
      if (!book) {
         throw new ApiError(StatusCodes.NOT_FOUND, "book is not available");
      }

      /**
       * If the book is found, we return a JSON response with the book's information.
       * We use the ApiResponse class to create a response object with the status code, data and message.
       */
      return res.status(StatusCodes.OK).json(
         new ApiResponse(
            StatusCodes.OK,
            { book },
            "single book information",
         ),
      );
   }),

   /**
    * This is a controller for getting all the books of a particular category.
    * It takes the category name from the request parameters.
    * It queries the database to find the books that match the given category.
    * If the category is not found, it throws an ApiError with a 404 status code and a message.
    * If the books are found, it returns a JSON response with the books.
    * The response object is created using the ApiResponse class.
    * The ApiResponse class takes three parameters: the status code, the data and the message.
    * The status code is set to 200, the data is set to the books array and the message is set to "here all the books".
    */
   getAllBookOfAParticularCategory: asyncHandler(async (req, res) => {
      const { catName } = req.params;

      if (!catName) {
         // if the category is not provided, throw an ApiError with a 404 status code and a message
         throw new ApiError(StatusCodes.NOT_FOUND, "category is necessary");
      }

      // query the database to find the books that match the given category
      const books = await Books.find({
         // the category should be in the array of categories
         category: { $in: [capitalize(catName)] },
      });

      // return the result
      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               // the status code is set to 200
               StatusCodes.OK,
               // the data is set to the books array
               books,
               // the message is set to a string that includes the category name
               `here all book ${catName} books`,
            ),
         );
   }),

   searchBook: asyncHandler(async (req, res) => {
      // get the search term from the query
      const { search } = req.query;

      // find the books that match the search term
      const books = await Books.find({
         $or: [
            // search in the title with case insensitive
            { title: { $regex: search, $options: "i" } },
            // search in the author with case insensitive
            { author: { $regex: search, $options: "i" } },
            // search in the category with case insensitive
            { category: { $regex: search, $options: "i" } },
         ],
      });

      // return the result
      return res.status(StatusCodes.OK).json(
         new ApiResponse(
            StatusCodes.OK,
            {
               books,
            },
            "here all the books",
         )
      );
   }),

   createBook: asyncHandler(async (req, res) => { }),
};

module.exports = { bookControllers };
