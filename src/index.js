import mongoose from "mongoose";
import {DB_NAME} from "./constant.js";
import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});




connectDB();
















/* ;(async ()=> {
    try {await mongoose.connect(`${process.env.MONGODB_URL}/${backend_2}`)
    app.on("error", (error) => {
        console.error("Error connecting to MongoDB:", error);
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})() */