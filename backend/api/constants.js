const DATABASE_NAME = "YTVP_DB";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://127.0.0.1:8000";
const EXPRESS_RATE_LIMIT = "45kb";

module.exports = { CORS_ORIGIN, DATABASE_NAME, EXPRESS_RATE_LIMIT };
