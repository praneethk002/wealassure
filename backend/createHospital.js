const express = require("express");
const router = express.Router();
const Hospital = require("./models/Hospital.js");

router.post("/createHospital", async (req, res) => {
  const { name, email,  phno, walletAddress } = req.body;

  const _hospital = new Hospital({ name, email, phno, walletAddress });
  _hospital.save(async (error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (data) {
      console.log(`Hospital Created Successfully..!`);
      return res.status(201).json({
        message: "Hospital Created Successfully..!",
      });
    }
  });
});

router.get("/getHospital/:wallet", (req, res) => {
  const hospital = Hospital.findOne({ walletAddress: req.params.wallet }).exec(
    (err, user) => {
      if (err) {
        return res.status(400);
      }
      if (user) {
        return res.status(200).json({ hospital });
      }
    }
  );
});

module.exports = router;
