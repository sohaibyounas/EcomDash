const mongoose = require("mongoose");

// Reuse the connection across serverless invocations
let connection = null;

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return mongoose.connection;
    if (!connection) {
        connection = mongoose.connect(process.env.MONGO_URI).catch((err) => {
            connection = null;
            throw err;
        });
    }
    await connection;
    console.log("MongoDB connected");
    return mongoose.connection;
};

module.exports = connectDB;
