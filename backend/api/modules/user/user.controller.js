const { asyncHandler } = require("../../utils/asyncHandler");

const userControllers = {
   register: asyncHandler(async (req, res) => {
      // step 1: get all the parameters from body
      
   }),
   login: asyncHandler(async (req, res) => { }),
};

module.exports = { userControllers };
