const express = require("express");
const User = require("../models/User");
const router = express.Router();

// khi ng dùng gửi thông tin login lên server
router.post("/login", async function (req, res) {
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    // error handling
    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// register ngược vs login
router.post("/register", async function (req, res) {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
