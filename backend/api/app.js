const express = require("express");
const { appRouter } = require("./routers");
const { StatusCodes } = require("http-status-codes");
const connectDatabase = require("./database/db.connection");
const app = express();
connectDatabase();

app.get("/", (req, res) => res.status(StatusCodes.OK));
app.use("/api", appRouter);

module.exports = { app };
