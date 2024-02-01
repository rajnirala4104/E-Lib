const { Router } = require('express')
const { cartControllers } = require('./cart.controllers')
const cartRouter = Router()

cartRouter.get('/', cartControllers.getCardItems)
cartRouter.get('/:bookId', cartControllers.getSingleItemFromCart)

module.exports = { cartRouter }