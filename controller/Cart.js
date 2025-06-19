import { Cart } from '../models/CartModel.js'
export const CartController = async (req, res) => {
    const { userId, products } = req.body;
    const cart = await Cart.findOne({ userId });
    if (cart) {
        cart.products = products;
        await cart.save();
        res.json(cart);
    } else {
        const newCart = new Cart({ userId, products });
        await newCart.save();
        res.json(newCart);
    }
}

export const getCart = async (req, res) => {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId });
    if (cart) {
        res.json(cart);
    } else {
        res.json({ message: "Cart not found" });
    }
}

export const deleteCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json({ message: "Cart deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting cart", error: error.message });
  }
};
