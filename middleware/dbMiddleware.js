import { initializeDB } from "../db/dbSelector.js";

let db;

export const dbMiddleware = async (req, res, next) => {
    try {
        if (!db) {
            db = await initializeDB();
        }
        req.db = db; // Attach the db instance to the request object
        next();
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: "Database connection failed" });
    }
};