const { Schema, model } = require("mongoose");
const { compare, genSalt, hash } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
//const { encryptPassword } = require("../../utils/passwordEncryptionMethod.js");

const adminSchema = Schema(
   {
      name: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         require: [true, "Please Fill all the Fields"],
         unique: true,
      },
      avatar: {
         type:String,
         default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
      },
      role: {
         type: String,
         require: true,
      },
      bio: {
         type: String,
         default: "---bio---"
      },
      location: {
         type: String,
         require: true,
      },
      refreshToken: {
         type: String,
         require: true
      },
   },
   { timestamps: true },
);

adminSchema.pre("save", async function (next) {
   try {
      if (this.isModified("password")) {
         const salt = await genSalt(5);
         this.password = await hash(this.password, salt);
         //encryptPassword(this.password);
      }
      return next();
   } catch (error) {
      next(error);
   }
});

adminSchema.methods.isPasswordTrue = async function (password) {
   return await compare(password, this.password); // true and false
};

// method to generate access token
adminSchema.methods.generateAccessToken = function () {
   const token = jsonwebtoken.sign({ _id: this._id }, process.env.ACCESS_JWT_SECRET, {
      expiresIn: process.env.ACCESS_JWT_EXPIRY,
   });
   return token;
};

// method to generate refresh token
adminSchema.methods.generateRefreshToken = function () {
   const refToken = jsonwebtoken.sign(
      { _id: this._id },
      process.env.REFRESH_TOKEN_SECRETE,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
   );
   return refToken;
};

const Admin = model("Admin", adminSchema);
module.exports = { Admin };
