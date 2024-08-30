const { asyncHandler } = require("../../utils/asynHandler");

const userControllers = {
   register: asyncHandler(async (req, res) => {}),
   login: asyncHandler(async (req, res) => {}),
};

module.exports = { userControllers };
