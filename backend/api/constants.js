const DATABASE_NAME = "YTVP_DB";
const CORS_ORIGIN =
   process.env.CORS_ORIGIN ||
   "http://localhost:3000https://e-lib-api-eh8c.onrender.com";
const EXPRESS_RATE_LIMIT = "45kb";

module.exports = { CORS_ORIGIN, DATABASE_NAME, EXPRESS_RATE_LIMIT };
