const { Router } = require("express");
const { bookRouter } = require("../modules/books/books.routes");
const { userRouter } = require("../modules/user/user.routes");
const { adminRouter } = require("../modules/admin/admin.routes");
const { categoryRoute } = require("../modules/category/category.routes");
const v1Router = Router();

v1Router.use("/books", bookRouter);
v1Router.use("/user", userRouter);
v1Router.use("/admin", adminRouter);
v1Router.use("/category", categoryRoute);

module.exports = { v1Router };
