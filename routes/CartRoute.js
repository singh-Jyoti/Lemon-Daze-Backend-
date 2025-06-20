import express from "express";
import { CartController, deleteCart, getCart } from "../controller/Cart.js";

const router = express.Router();
router.post("/",CartController);
router.get("/:userId",getCart);
router.delete('/:userId/:productId', deleteCart);


export default router;