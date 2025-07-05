const { asyncHandler } = require("../../utils/asyncHandler");
const { ApiError } = require("../../utils/apiError");
const { ApiResponse } = require("../../utils/apiResponse");
const { StatusCodes } = require("http-status-codes");
const { Admin } = require("./admin.model");
// const { CacheService } = require("../../utils/cacheService");
const { encryptPassword } = require("../../utils/passwordEncryptionMethod");

const generateAccessAndRefreshToken = async (adminId) => {
   try {
      const admin = await Admin.findById(adminId);
      
      const accessToken = admin.generateAccessToken();
      const refreshToken = admin.generateRefreshToken();
      
      admin.refreshToken = refreshToken;
      await admin.save({validateBeforeSave: false});

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
     try {
      const { name, email, password, role, bio, location } = req.body;
      
      // Step 1: check the fields
      if( !name || !email || !password || !role || !location){
         return JSON({
            status: StatusCodes.CONFLICT,
            message: "all fields are necessary",
            data: null
         })
      }

      // Step 2: Check if admin already exists
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
         return res.status(400).json({ message: "Admin is already exists" });
      }

      // Step 3: Create new admin instance (password will be hashed in pre-save hook)
      const newAdmin = new Admin({ name, email, password, role, bio, location });

      // Step 4: Save to generate _id (so we can use it in token)
      await newAdmin.save();

      // Step 5: Generate refresh token using method
      const {refreshToken, accessToken} = await generateAccessAndRefreshToken(newAdmin._id)
       
      // Step 6: Store the refresh token in DB
      newAdmin.refreshToken = refreshToken;
      await newAdmin.save(); // 👈 important: save again to update refreshToken


      // Step 7: Send response
      res.status(201).json({
         admin: {
            id: newAdmin._id,
            name: newAdmin.name,
            email: newAdmin.email,
            role: newAdmin.role,
            bio: newAdmin.bio,
            location: newAdmin.location,
         },
         tokens: {
            accessToken,
            refreshToken,
         },
      });

   } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
   }   }),

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
      const option = {
         httpOnly: true,
         secure: true,
      };

     const loggedUser = await Admin.findOne({ _id: user._id }).select(
         "-password -refreshToken",
      );

      return res
         .status(StatusCodes.OK)
         .cookie("accessToken", tokens.accessToken, option)
         .cookie("refreshToken", tokens.refreshToken, option)
         .json(
            new ApiResponse(StatusCodes.OK, {
               user: loggedUser,
               accessToken: tokens.accessToken,
               refreshToken: tokens.refreshToken,
            }),
         );   }),
   logout: asyncHandler(async (req, res) => { }),
};

module.exports = { adminControllers };
