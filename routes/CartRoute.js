import express from "express";
import { CartController, deleteCart, getCart } from "../controller/Cart.js";

const router = express.Router();
router.post("/",CartController);
router.get("/:userId",getCart);
router.delete("/:cartId",deleteCart);

export default router;