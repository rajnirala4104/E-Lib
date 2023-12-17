require("dotenv").config();
const { createServer } = require("http");
const { app } = require("./api/app");
const { LOGGER } = require("./api/common/logger");

const PORT = process.env.PORT || 8000;

createServer(app).listen(PORT, () => {
  LOGGER.info(
    `API is running.. http://127.0.0.1:${PORT}/api/v1/books`.yellow.bold
  );
});
