const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phno: { type: String },
    age: { type: String },
    walletAddress: { type: String },
  },

  {}
);

module.exports = mongoose.model("User", userSchema);
