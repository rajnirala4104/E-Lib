const { v2 } = require("cloudinary");
const fs = require("fs");

const uploadOnCloudinary = async (filePath) => {
   v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
   });

   try {
      if (!filePath) return null;

      // upload on cloudinary
      const response = await v2.uploader.upload(filePath);

      fs.unlinkSync(filePath);
      return response.url;
   } catch (error) {
      // remove the locally saved temporary file
      fs.unlinkSync(filePath);

      return null;
   }
};

module.exports = { uploadOnCloudinary };
