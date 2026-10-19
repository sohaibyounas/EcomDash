// Vercel serverless entry: runs the Express backend under /api
import app from "../ecommerce-server/src/app.js";
import connectDB from "../ecommerce-server/src/config/db.js";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.error("DB connection failed:", err.message);
        return res.status(500).json({ error: "Database connection failed" });
    }
    return app(req, res);
}
