import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;