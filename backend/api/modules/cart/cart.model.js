const { model, Schema } = require('mongoose');
const CardSchema = Schema({
  quantity: { type: Number },
  items: Schema.Types.ObjectId,
  ref: "BookSchema",
})