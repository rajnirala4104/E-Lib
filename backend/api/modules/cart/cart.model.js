const { model, Schema } = require('mongoose');

const CartSchema = Schema({
  quantity: { type: Number },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "BookSchema"
  }]
})

const Cart = model('Cart', CartSchema);
module.exports = { Cart }