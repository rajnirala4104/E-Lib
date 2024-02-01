const expressAsyncHandler = require("express-async-handler");

const cartControllers = {
  getCardItems: expressAsyncHandler(async (req, res) => { }),
  getSingleItemFromCart: expressAsyncHandler(async (req, res) => { }),
  insertItemIntoCard: expressAsyncHandler(async (req, res) => { }),
  updateCartItems: expressAsyncHandler(async (req, res) => { }),
  removeItemFromCard: expressAsyncHandler(async (req, res) => { })
}

module.exports = { cartControllers }