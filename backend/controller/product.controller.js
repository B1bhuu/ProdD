import mongoose from "mongoose";

import Product from "../models/product.model";

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log(`Error in fetching product ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createProduct = async(req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(500).json({ sucess: false, message: "Please provide all field data" });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ sucess: true, data: newProduct });


    } catch (error) {
        console.error("Error in creating the server:", error.message);
        res.status(500).json({ sucess: false, message: "Server Error" })
    }
}

export const updateProduct = async(req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: true, message: "Invalid Product ID" });

    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ sucess: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
};

export const deleteProduct = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Type.ObjectId.isValid(id)) {
        return res.status(200).json({ sucess: true, message: "Invalid Product Id" })
    }
    try {
        await Product.findByIdAndDelete(id);
        res.staus(200).json({ sucess: true, message: "Product Deleted" });
    } catch (error) {
        console.log("Error in deleting product", error.message);
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
}