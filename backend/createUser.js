const express = require("express");
const router = express.Router();
const User = require("./models/User.js");

router.post("/createUser", async (req, res) => {
  const { name, email, age, phno, walletAddress } = req.body;

  const _user = new User({ name, email, age, phno, walletAddress });
  _user.save(async (error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (data) {
      console.log(`User Created Successfully..!`);
      return res.status(201).json({
        message: "User Created Successfully..!",
      });
    }
  });
});

router.get("/getUser/:wallet", (req, res) => {
  const user = User.findOne({ walletAddress: req.params.wallet }).exec(
    (err, user) => {
      if (err) {
        return res.status(400);
      }
      if (user) {
        return res.status(200).json({ user });
      }
    }
  );
});

module.exports = router;
