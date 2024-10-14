import mongoose from "mongoose";

export const ConnectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MOngoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}