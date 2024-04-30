import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export default async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb Connected !!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`${process.env.MONGODB_URI}`);
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}