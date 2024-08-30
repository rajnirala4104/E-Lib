const { asyncHandler } = require("../../utils/asynHandler");
const { ApiError } = require("../../utils/apiError");
const { ApiResponse } = require("../../utils/apiResponse");
const { StatusCodes } = require("http-status-codes");
const { Admin } = require("./admin.model");

const adminControllers = {
   adminRegistration: asyncHandler(async (req, res) => {
      const { password } = req.body;
      if (!password) {
         throw new ApiError(StatusCodes.NOT_FOUND, "password is necessary");
      }

      const admin = await Admin.create({ password }, { new: true });
      return res
         .Status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.CREATED,
               admin,
               "admin create successfully",
            ),
         );
   }),
   login: asyncHandler(async (req, res) => {}),
   logout: asyncHandler(async (req, res) => {}),
};

module.exports = { adminControllers };
