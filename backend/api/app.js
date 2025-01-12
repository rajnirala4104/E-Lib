const express = require("express");
const { appRouter } = require("./routers");
const { StatusCodes } = require("http-status-codes");
const connectDatabase = require("./database/db.connection");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { EXPRESS_RATE_LIMIT, CORS_ORIGIN } = require("./constants");
const cookieParser = require("cookie-parser");

const app = express();
connectDatabase();

const accessLogStream = fs.createWriteStream(
   path.join(__dirname, "./logs/access.log"),
   { flags: "a" },
);

// express middlewares
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: EXPRESS_RATE_LIMIT })); // limit helps to manage the rate of requests to a server in Express.js applications
app.use(express.urlencoded({ limit: EXPRESS_RATE_LIMIT, extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api", appRouter);

app.get("/", (req, res) => {
   return res.status(StatusCodes.OK).json({
      message: "api is running..",
      status: StatusCodes.OK,
      data: null,
   });
});

module.exports = { app };
