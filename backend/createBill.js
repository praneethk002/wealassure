const express = require("express");
const router = express.Router();
const Bill = require("./models/Bill.js");

router.post("/createBill", async (req, res) => {
  const {
    userWallet,
    userContract,
    insuranceCompany,
    prescription,
    amount,
    hospitalWalletAddress,
    billStatus,
    policyID,
  } = req.body;

  const _Bill = new Bill({
    userWallet,
    userContract,
    insuranceCompany,
    prescription,
    amount,
    hospitalWaller: hospitalWalletAddress,
    billStatus,
    policyId: policyID,
  });
  _Bill.save(async (error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (data) {
      console.log(`Bill Created Successfully..!`);
      return res.status(201).json({
        message: "Bill Created Successfully..!",
      });
    }
  });
});

router.get("/getBills/:wallet", (req, res) => {
  const bills = Bill.find({ userWallet: req.params.wallet }).exec(
    (err, user) => {
      if (err) {
        return res.status(400);
      }
      if (user) {
        return res.status(200).json({ bills: user });
      }
    }
  );
});

router.get("/getPendingBills/:hospital", (req, res) => {
  const bills = Bill.find({
    hospitalWallet: req.params.hospital,
    paymentStatus: "Not Paid",
  }).exec((err, bills) => {
    if (err) {
      return res.status(400);
    }
    if (bills) {
      return res.status(200).json({ bills });
    }
  });
});

module.exports = router;
