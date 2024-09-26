const { Schema, model } = require("mongoose");

const categorySchema = Schema(
   {
      categoryName: {
         type: String,
         required: true,
      },
      books: {
         type: Schema.Types.ObjectId,
         ref: "Books",
      },
   },
   { timestamps: true },
);

const CategoryModel = model("Category", categorySchema);
module.exports = { CategoryModel };
