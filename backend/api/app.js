const express = require("express");
const { appRouter } = require("./routers");
const { StatusCodes } = require("http-status-codes");
const connectDatabase = require("./database/db.connection");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "./logs/access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => res.status(StatusCodes.OK));
app.use("/api", appRouter);

module.exports = { app };
