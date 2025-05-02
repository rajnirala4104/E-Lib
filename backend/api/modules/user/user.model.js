const { Schema, model } = require("mongoose");
const { validateEmail } = require("../../utils/emailValidator");
const { compare } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

// this is a user schema
const userSchema = Schema({
   name: {
      type:String,
      require: true,
   },
   email: {
      type:String,
      require:true,
      unique: true,
   },
   password: {
      type:String,
      require: true,
   },
   confirmPassword: {
      type:String,
      require: true
   },
   phonenumber: {
      type:String,
      require: true,
      unique: true
   }
}, { timestamps: true });

// method to check the password
userSchema.methods.isPasswordTrue = async function(password){
   return await compare(password, this.password)
}

// method to generate access token for the user
userSchema.methods.generateAccessToken = function(){
   const token = jsonwebtoken.sign({_id: this._id}, process.env.ACCESS_JWT_SECRET, {
      expiresIn: process.env.ACCESS_JWT_EXPIRY,
   });
   return token;
}

// method to generate refress token for the user
userSchema.methods.generateRefreshToken = function(){
   const refToken = jsonwebtoken.sign({_id: this._id}, process.env.REFRESH_TOKEN_SECRETE, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
   });
   return refToken;
}

const userModel = model("Users", userSchema);
module.exports = { userModel };
