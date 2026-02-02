import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import { Courses } from "./models/Courses.js";

dotenv.config();

const sampleCourses = [
  {
    title: "React for Beginners",
    description: "Learn React from scratch. Components, hooks, routing and state management.",
    image: "uploads/image_2.png",
    price: 499,
    duration: 10,
    category: "Web Development",
    createdBy: "Admin",
  },
  {
    title: "Node.js & Express",
    description: "Build backend APIs with Node.js, Express and MongoDB.",
    image: "uploads/image_2.png",
    price: 699,
    duration: 12,
    category: "Backend",
    createdBy: "Admin",
  },
  {
    title: "Python for Data Science",
    description: "Intro to Python, pandas, numpy and basic ML concepts.",
    image: "uploads/image_2.png",
    price: 799,
    duration: 15,
    category: "Data Science",
    createdBy: "Admin",
  },
];

const seed = async () => {
  try {
    await connectDb();

    // Remove existing sample courses with same titles (safe to run multiple times)
    for (const c of sampleCourses) {
      const exists = await Courses.findOne({ title: c.title });
      if (!exists) {
        await Courses.create(c);
        console.log(`Inserted: ${c.title}`);
      } else {
        console.log(`Already exists: ${c.title}`);
      }
    }

    console.log("Seeding finished.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seed();
