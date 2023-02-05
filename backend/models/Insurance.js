const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phno: { type: String },
    walletAddress: { type: String },
    policyId: { type: String },
    policyName: { type: String },
  },

  {}
);

module.exports = mongoose.model("Company", insuranceSchema);