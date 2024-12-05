import express from "express";
import {addProductPage, addProductAction,viewProductsPage,deleteProductsPage} from "../controller/product.controller.js";
const router = express.Router();
router.get("/add", addProductPage);
router.post("/add", addProductAction);
// router.post("/view-product", viewProductsPage);
router.get("/viewProduct", viewProductsPage);
router.get("/delete/:productId", deleteProductsPage);
export default router;