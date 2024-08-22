const { model, Schema } = require("mongoose");

const CartSchema = Schema({}, { timestamps: true });

const Cart = model("Cart", CartSchema);
module.exports = { Cart };
