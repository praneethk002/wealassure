const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    userWallet: { type: String },
    userContract: { type: String },
    insuranceCompany: { type: String },
    prescription: { type: String },
    billAmount: { type: String },
    billStatus: { type: String },
    policyId: { type: String },
    hospitalWallet: { type: String },
  },

  {}
);

module.exports = mongoose.model("Bill", billSchema);
