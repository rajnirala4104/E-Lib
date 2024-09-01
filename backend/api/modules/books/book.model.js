const { model, Schema } = require("mongoose");

const BookSchema = Schema(
   {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      category: {
         type: [String],
         required: true,
      },
      author: {
         type: String,
         default: "unknown",
      },
      price: {
         type: Number,
         required: true,
      },
   },
   { timestamps: true },
);

const Books = model("Books", BookSchema);
module.exports = { Books };
