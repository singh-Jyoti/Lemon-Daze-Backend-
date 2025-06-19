import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: "String",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        AvailabeSize: {
            type: String,
            required: true,
        }
    },
  {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

export { Product };