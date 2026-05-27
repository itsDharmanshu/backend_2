import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";


console.log(process.env.MONGODB_URL);
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`); 
        console.log(`Successfully connected to MongoDB database, DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    }   
};

export default connectDB;
