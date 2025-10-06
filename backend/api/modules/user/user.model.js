const { Schema, model } = require("mongoose");
const { validateEmail } = require("../../utils/emailValidator");
const { compare } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

// this is a user schema
const userSchema = Schema({
   name: { type:String, require: true },
   email: { type:String, require:true, unique: true },
   password: { type:String, require: true },
   avatar: {
      type:String,
      default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
   },
   phonenumber: { type:String, require: true, unique: true },
   addresses: [{
         street: String,
         city: String,
         state: String,
         pincode: String,
         country: String,
         isDefault: { type: Boolean, default: false }
   }],
   role: { type: String, enum: ['customer', 'admin', 'seller'], default: 'customer' },
   isVerified: { type: Boolean, default: false },
   lastLogin: { type: Date },
   cart: [{
         productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Books' },
         quantity: { type: Number, default: 1 }
      }],
   wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
}, { timestamps: true });

userSchema.pre("save", async function(next){
   try{
      if(this.isModified("password")){
         const salt = await genSalt(5);
         this.password = await hash(this.password, salt);
      }
   }catch(error){
      next(error)
   }
})

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
