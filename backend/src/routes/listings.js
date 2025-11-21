const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// @desc   Create a new listing
// @route  POST /api/listings
router.post("/", async (req, res) => {
  try {
    const { title, name, category, quantity, price, seller } = req.body;

    const listing = new Listing({
      title,
      name,
      category,
      quantity,
      price,
      seller,
    });

    const createdListing = await listing.save();
    res.status(201).json(createdListing);
  } catch (error) {
    console.error("❌ Error creating listing:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// @desc   Get all listings
// @route  GET /api/listings
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.json(listings);
  } catch (error) {
    console.error("❌ Error fetching listings:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// @desc   Get a single listing by ID
// @route  GET /api/listings/:id
router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    console.error("❌ Error fetching listing:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// @desc   Update a listing by ID
// @route  PUT /api/listings/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, name, category, quantity, price, seller } = req.body;

    const listing = await Listing.findById(req.params.id);

    if (listing) {
      listing.title = title || listing.title;
      listing.name = name || listing.name;
      listing.category = category || listing.category;
      listing.quantity = quantity || listing.quantity;
      listing.price = price || listing.price;
      listing.seller = seller || listing.seller;

      const updatedListing = await listing.save();
      res.json(updatedListing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    console.error("❌ Error updating listing:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// @desc   Delete a listing by ID
// @route  DELETE /api/listings/:id
router.delete("/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (listing) {
      await listing.deleteOne();
      res.json({ message: "Listing removed" });
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    console.error("❌ Error deleting listing:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;
