const mongoose = require("mongoose");

// Middleware to validate MongoDB ObjectId params
module.exports = function (req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  next();
};
