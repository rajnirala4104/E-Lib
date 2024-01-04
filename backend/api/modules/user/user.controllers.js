const expressAsyncHandler = require("express-async-handler");

const userControllers = {
    getAllUsers: expressAsyncHandler(async (req, res) => { }),
    createUser: expressAsyncHandler(async (req, res) => { }),
    deleteUser: expressAsyncHandler(async (req, res) => { }),
    loginUser: expressAsyncHandler(async (req, res) => { }),
    updateUser: expressAsyncHandler(async (req, res) => { }),
}

module.exports = { userControllers }