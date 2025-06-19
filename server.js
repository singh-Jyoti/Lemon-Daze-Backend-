import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import connectDB from "./config/db.js";
import loginRoute from './routes/loginRoute.js';
import registerRoute from './routes/registerRoute.js';
import prodctRoute from './routes/productRoute.js';

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// connect to DB
connectDB();

// routes
app.use("/auth", registerRoute);
app.use("/auth", loginRoute);
app.use("/Product" , prodctRoute);

app.listen(8000, () => {
    console.log("server is running on port 8000");
});
