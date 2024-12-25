import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    } catch (err) {
        console.error("Error connecting to DB", err);
        process.exit(1); // Exit process with failure
    }
};

export const connection = mongoose.connection;