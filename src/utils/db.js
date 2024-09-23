import mongoose from "mongoose";

const connect = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error(
      "Please define the MONGO_URL environment variable inside .env.local"
    );
  }

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default connect;
