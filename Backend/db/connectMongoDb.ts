import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL as string)
        console.log("connected to MongoDB")

    }catch (error) {
        console.log("Error")

    }
};

export default connectToMongoDb;