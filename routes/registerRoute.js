import express from "express";
import { registerController } from "../controller/register.js";

const router = express.Router();

router.post("/register" , registerController);

export default router;  //export the router to use it in other files.  //export default router