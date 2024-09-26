const { asyncHandler } = require("../../utils/asynHandler");
const { CategoryModel } = require("./category.model");
const { categories } = require("../../data/allCategories.json");
const { StatusCodes } = require("http-status-codes");

const categoryControllers = {
   getAllCategory: asyncHandler(async (req, res) => {
      return res.status(StatusCodes.OK).json({
         message: "here all the categories",
         status: StatusCodes.OK,
         data: categories,
      });
   }),
};

module.exports = { categoryControllers };
