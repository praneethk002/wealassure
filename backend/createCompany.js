const express = require("express");
const router = express.Router();
const Company = require("./models/Insurance.js");

router.post("/createCompany", async (req, res) => {
  const { name, email, phno, walletAddress, policy } = req.body;

  const _company = new Company({ name, email, phno, walletAddress, policy });
  _company.save(async (error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (data) {
      console.log(`Company Created Successfully..!`);
      return res.status(201).json({
        message: "Company Created Successfully..!",
      });
    }
  });
});

router.get("/getHospital/:wallet", (req, res) => {
  const company = Company.findOne({ walletAddress: req.params.wallet }).exec(
    (err, user) => {
      if (err) {
        return res.status(400);
      }
      if (user) {
        return res.status(200).json({ company });
      }
    }
  );
});

module.exports = router;
