const { Schema, model } = require("mongoose");
const { compare, genSalt, hash } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { encryptPassword } = require("../../utils/passwordEncryptionMethod.js");

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
         require: true,
         unique: true,
      },
      roll: {
         type: String,
         require: true,
      },
      refreshToken: {
         type: String,
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
   return jsonwebtoken.sign({ _id: this._id }, process.env.ACCESS_JWT_SECRET, {
      expiresIn: process.env.ACCESS_JWT_EXPIRY,
   });
};

// method to generate refresh token
adminSchema.methods.generateRefreshToken = function () {
   return jsonwebtoken.sign(
      { _id: this._id },
      process.env.REFRESH_TOKEN_SECRETE,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
   );
};

const Admin = model("Admin", adminSchema);
module.exports = { Admin };
