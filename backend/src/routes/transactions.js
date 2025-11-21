const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// @desc    Create a new transaction
// @route   POST /api/transactions
router.post("/", async (req, res) => {
  try {
    const { buyerId, listingId, quantity, totalPrice, status } = req.body;

    const transaction = new Transaction({
      buyerId,
      listingId,
      quantity,
      totalPrice,
      status: status || "pending",
    });

    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
  } catch (error) {
    console.error("❌ Error creating transaction:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// @desc    Get all transactions
// @route   GET /api/transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({})
      .populate("buyerId", "name email")
      .populate("listingId", "title price category");
    res.json(transactions);
  } catch (error) {
    console.error("❌ Error fetching transactions:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// @desc    Get single transaction by ID
// @route   GET /api/transactions/:id
router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate("buyerId", "name email")
      .populate("listingId", "title price category");

    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching transaction:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// @desc    Update a transaction
// @route   PUT /api/transactions/:id
router.put("/:id", async (req, res) => {
  try {
    const { buyerId, listingId, quantity, totalPrice, status } = req.body;

    const transaction = await Transaction.findById(req.params.id);

    if (transaction) {
      transaction.buyerId = buyerId || transaction.buyerId;
      transaction.listingId = listingId || transaction.listingId;
      transaction.quantity = quantity || transaction.quantity;
      transaction.totalPrice = totalPrice || transaction.totalPrice;
      transaction.status = status || transaction.status;

      const updatedTransaction = await transaction.save();
      res.json(updatedTransaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error("❌ Error updating transaction:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction) {
      await transaction.deleteOne();
      res.json({ message: "Transaction removed" });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error("❌ Error deleting transaction:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
