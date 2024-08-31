const { asyncHandler } = require("../../utils/asynHandler");
const { ApiError } = require("../../utils/apiError");
const { ApiResponse } = require("../../utils/apiResponse");
const { StatusCodes } = require("http-status-codes");
const { Admin } = require("./admin.model");

const generateAccessAndRefreshToken = async (adminId) => {
   try {
      const admin = await Admin.findById(adminId);
      console.log(admin);
      const accessToken = admin.generateAccessToken();
      const refreshToken = admin.generateRefreshToken();

      admin.refreshToken = refreshToken;
      await admin.save({ validateBeforeSave: false });

      return { accessToken, refreshToken };
   } catch (error) {
      throw new ApiError(
         StatusCodes.INTERNAL_SERVER_ERROR,
         "Something went wrong while generating tokens",
      );
   }
};

const adminControllers = {
   adminRegistration: asyncHandler(async (req, res) => {
      const { password } = req.body;
      if (!password) {
         throw new ApiError(StatusCodes.NOT_FOUND, "password is necessary");
      }

      const adminDoesExist = await Admin.findOne({ name: "root" });
      if (adminDoesExist) {
         throw new ApiError(StatusCodes.CONFLICT, "Admin is already exist");
      }

      const admin = await Admin.create({ password });
      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.CREATED,
               admin,
               "admin create successfully",
            ),
         );
   }),
   login: asyncHandler(async (req, res) => {
      const { name, password } = req.body;
      if (!name || !password) {
         throw new ApiError(StatusCodes.NOT_FOUND, "all fields are necessary");
      }

      const admin = await Admin.findOne({ name });
      if (!admin) {
         throw new ApiError(StatusCodes.NOT_FOUND, "admin doesn't exist");
      }

      const isPasswordTrue = await admin.isPasswordTrue(password);
      if (!isPasswordTrue) {
         throw new ApiError(StatusCodes.CONFLICT, "password is wrong");
      }

      const loggedUser = await Admin.findOne({ _id: admin._id }).select(
         "-password -refreshToken",
      );
      const tokens = await generateAccessAndRefreshToken(loggedUser._id);

      const option = {
         httpOnly: true,
         secure: true,
      };

      return res
         .status(StatusCodes.OK)
         .cookie("accessToken", tokens.accessToken, option)
         .cookie("refreshToken", tokens.refreshToken, option)
         .json(
            new ApiResponse(StatusCodes.OK, {
               admin: loggedUser,
               accessToken: tokens.accessToken,
               refreshToken: tokens.refreshToken,
            }),
         );
   }),
   logout: asyncHandler(async (req, res) => {}),
};

module.exports = { adminControllers };
