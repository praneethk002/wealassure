const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phno: { type: String },
    walletAddress: { type: String },
  },

  {}
);

module.exports = mongoose.model("Hospital", hospitalSchema);
