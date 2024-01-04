const { Router } = require('express');
const { userControllers } = require('./user.controllers');
const userRouter = Router();

userRouter.get('/', userControllers.getAllUsers)
userRouter.post('/signup', userControllers.createUser)
userRouter.post('/login', userControllers.loginUser)
userRouter.put('/update/:id', userControllers.updateUser)
userRouter.put('/delete/:id', userControllers.deleteUser)

module.exports = { userRouter }
