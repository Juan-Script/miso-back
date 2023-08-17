import express from "express";
import productsControllers from "../controllers/products.controllers";

const router = express.Router();

router.get("/", productsControllers.getAllProducts);
router.get("/:id", productsControllers.getProduct);
router.post("/", productsControllers.newProduct);
router.delete("/:id", productsControllers.deleteProduct);

export default router;
