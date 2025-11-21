const { body, validationResult } = require("express-validator");

// Transaction validation rules
const validateTransaction = [
  body("buyer")
    .notEmpty()
    .withMessage("Buyer is required")
    .isString()
    .withMessage("Buyer must be a string"),
  body("seller")
    .notEmpty()
    .withMessage("Seller is required")
    .isString()
    .withMessage("Seller must be a string"),
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number")
    .custom((val) => val > 0)
    .withMessage("Amount must be greater than 0"),
  body("status")
    .optional()
    .isIn(["pending", "completed", "failed"])
    .withMessage("Status must be one of: pending, completed, failed"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

// Listing validation rules
const validateListing = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = { validateTransaction, validateListing };
