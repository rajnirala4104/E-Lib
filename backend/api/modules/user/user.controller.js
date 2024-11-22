const { asyncHandler } = require("../../utils/asyncHandler");

const userControllers = {
   register: asyncHandler(async (req, res) => { }),
   login: asyncHandler(async (req, res) => { }),
};

module.exports = { userControllers };
