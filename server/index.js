import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./config/database.js";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";

const app = express();
dotenv.config();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", authRouter);
app.use("/", postRouter);


// Database connection
db();

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
