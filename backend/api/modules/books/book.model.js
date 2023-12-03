const { model, Schema } = require("mongoose");
const BookSchema = Schema({
   name: { type: String, require: true },
   description: {
      type: String,
      required: true,
   },
   author: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   BookImage: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   discountPrice: {
      type: Number,
      required: true,
   },
});

const BookModle = model("Books", BookSchema);
module.exports = { BookModle };
