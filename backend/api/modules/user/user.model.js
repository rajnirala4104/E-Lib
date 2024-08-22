const { Schema, model } = require("mongoose");
const { validateEmail } = require("../../utils/emailValidator");

// this is a user schema
const userSchema = Schema({}, { timestamps: true });

const userModel = model("Users", userSchema);
module.exports = { userModel };
