import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import { User } from "./models/User.js";

dotenv.config();

const findUsers = async () => {
  try {
    await connectDb();
    
    const users = await User.find();
    console.log("All users:");
    users.forEach(u => {
      console.log(`- Name: ${u.name}, Email: ${u.email}, Role: ${u.role}`);
    });
    
    // Update all users to admin
    const result = await User.updateMany({}, { role: "admin", mainrole: "admin" });
    console.log(`\n✓ Updated ${result.modifiedCount} users to admin role`);
    
    process.exit(0);
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};

findUsers();
