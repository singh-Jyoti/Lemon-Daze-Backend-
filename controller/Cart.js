// In your Cart controller

import mongoose from "mongoose";
import { Cart } from "../models/CartModel.js";
import { Product } from "../models/productModel.js";

export const CartController  = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    let cart = await Cart.findOne({ userId });
    let cartItem = await Cart.findOne({ userId , productId});
    if (cartItem) {
        return res.status(201).json({message: "Product already exists in cart"});
    }
    if (cart) {
      // add new product to existing cart
      cart.products.push({ productId });
      await cart.save();
    } else {
      // create new cart for user
      cart = new Cart({
        userId,
        products: [{ productId }],
      });
      await cart.save();
    }

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add to cart" });
  }
};



export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const cart = await Cart.findOne({ userId });
    const allcartproduct = [];
    if (cart) {
        for (const item of cart.products) {
            const p = await Product.findById(item.productId);
            allcartproduct.push(p);
        }
        return res.status(200).json(allcartproduct);
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }

  } catch (error) {
    console.error("Error fetching cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const deleteCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // Validate ObjectIds
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid userId or productId" });
    }

    // Find cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find product in cart
    const index = cart.products.findIndex((item) =>
      item.productId.toString() === productId
    );

    if (index !== -1) {
      cart.products.splice(index, 1);
      await cart.save();
      return res.status(200).json({ message: "Product removed from cart" });
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

