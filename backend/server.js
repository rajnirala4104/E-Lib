require("dotenv").config();
const { createServer } = require("http");
const { app } = require("./api/app");
const { LOGGER } = require("./api/common/logger");

const PORT = process.env.PORT || 8080;

createServer(app).listen(PORT, () => {
   LOGGER.info(`API is running.. [:${PORT}/api/v1/books]`.yellow.bold);
});
