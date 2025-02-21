const { asyncHandler } = require("../../utils/asyncHandler");
const { ApiError } = require("../../utils/apiError");
const { ApiResponse } = require("../../utils/apiResponse");
const { StatusCodes } = require("http-status-codes");
const { Admin } = require("./admin.model");
const { CacheService } = require("../../utils/cacheService");
const { encryptPassword } = require("../../utils/passwordEncryptionMethod");

const cacheService = new CacheService();

const generateAccessAndRefreshToken = async (adminId) => {
   try {
      const admin = await Admin.findById(adminId);
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
      const { name, email, password, roll } = req.body;
      if (!name || !email || !password || !roll) {
         throw new ApiError(StatusCodes.NOT_FOUND, "All information is necessary");
      }

      const adminDoesExist = await Admin.findOne({ name: "email" });
      if (adminDoesExist) {
         throw new ApiError(StatusCodes.CONFLICT, "Admin is already exist");
      }

      const user = await Admin.create({ name, email, password, roll });
      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.CREATED,
               user,
               `${user.roll} create successfully`,

            ),
         );
   }),
   login: asyncHandler(async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) {
         throw new ApiError(StatusCodes.NOT_FOUND, "all fields are necessary");
      }

      const user = await Admin.findOne({ email }).select("-refreshToken");

      if (!user) {
         throw new ApiError(StatusCodes.NOT_FOUND, "admin doesn't exist");
      }

      if (!(await user.isPasswordTrue(password))) {
         throw new ApiError(StatusCodes.CONFLICT, "password is wrong");
      }

      const tokens = await generateAccessAndRefreshToken(user._id);
      res.cookie("accessToken", tokens.accessToken, {
         secure: true,
         httpOnly: true,
      });
      res.cookie("refreshToken", tokens.refreshToken, {
         secure: true,
         httpOnly: true,
      });

      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(StatusCodes.OK, {
               admin: user.toObject({ getters: true }),
               accessToken: tokens.accessToken,
               refreshToken: tokens.refreshToken,
            }, "admin login successfully"),
         );
   }),
   logout: asyncHandler(async (req, res) => { }),
};

module.exports = { adminControllers };
