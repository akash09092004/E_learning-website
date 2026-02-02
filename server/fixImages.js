import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import { Courses } from "./models/Courses.js";

dotenv.config();

const fixImages = async () => {
  try {
    await connectDb();
    
    const result = await Courses.updateMany(
      {},
      { $set: { image: "uploads/image_2.png" } }
    );
    
    console.log(`Updated ${result.modifiedCount} courses with correct image path`);
    process.exit(0);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};

fixImages();
