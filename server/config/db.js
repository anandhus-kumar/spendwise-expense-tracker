const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("URI:", process.env.MONGODB_URL);
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Database connection established");
  } catch (error) {
    console.error("Error establishing a connection to database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
