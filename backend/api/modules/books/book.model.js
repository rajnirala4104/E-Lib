const { model, Schema } = require("mongoose");
const BookSchema = Schema({}, { timestamps: true });

const BookModle = model("Books", BookSchema);
module.exports = { BookModle };
