import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
  console.log("Cloudinary Key:", process.env.CLOUDINARY_API_KEY);
  console.log("Cloudinary Name:", process.env.CLOUDINARY_CLOUD_NAME);
});