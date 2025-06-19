import express from "express";
import { getProductsController, ProductController } from "../controller/product.js";
import { upload } from "../config/Multer.js";

const router = express.Router();

// ✅ Apply multer middleware here
router.post("/", upload.single("image"), ProductController);
router.get("/", getProductsController);

export default router;
