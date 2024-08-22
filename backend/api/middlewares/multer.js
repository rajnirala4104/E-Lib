const multer = require("multer");

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      return cb(null, "./public/temp");
   },
   filename: function (req, file, cb) {
      // return cb(null, `${Date.now()}-${file.originalname.trim()}`);
      return cb(null, file.originalname);
   },
});

const upload = multer({ storage });

module.exports = { upload };
