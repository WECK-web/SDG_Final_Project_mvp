import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { body } from "express-validator";

const router = express.Router();

// Validation rules
const productValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("category").notEmpty().withMessage("Category is required"),
  body("stock").isNumeric().withMessage("Stock must be a number"),
];

router.route("/").get(getProducts).post(productValidation, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(productValidation, updateProduct)
  .delete(deleteProduct);

export default router;
