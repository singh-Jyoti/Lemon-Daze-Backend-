import { Product } from "../models/productModel.js";

export const ProductController = async (req, res) => {
    try {
        const { name, price, description, category, quantity, AvailabeSize } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "Image file is required" });
        }
        const product = new Product({
            name,
            price,
            description,
            category,
            quantity,
            AvailabeSize,
            image: req.file ? `/uploads/${req.file.filename}` : null  // store relative path to file
        });

        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding product" });
    }
};


export const getProductsController = async (req, res) => {
    try {
        const products = await Product
            .find({})
            .populate("category")
            .select("-photo")
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            countTotal: products.length,
            message: "All product",
            products,
        });
    } catch (error) {

        res.status(500).send({
            success: false,
            message: "Error in getting products",
            error: error.message,
        });
    }
}