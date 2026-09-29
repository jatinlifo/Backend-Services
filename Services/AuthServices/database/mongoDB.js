import mongoose from "mongoose";
import config from "../config/env.js";

const connectMongoDB = async() => {

    try {
        const URI = config.mongoDB_URI;
        const MongoDB_Name = config.mongoDB_Name;
        const c = await  mongoose.connect(URI, {dbName: MongoDB_Name});

        // console.log("What thing return after connection", c);

        console.log(`MongoDB connection successfully`)
    } catch (error) {
        console.log(`MongoDB connection failed error ${error}`)
        process.exit(1)
    }
}

export default connectMongoDB;