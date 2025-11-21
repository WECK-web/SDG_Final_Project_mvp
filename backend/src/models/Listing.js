const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    name: { type: String },
    category: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    price: { type: Number, required: true },
    seller: { type: String, required: true },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
