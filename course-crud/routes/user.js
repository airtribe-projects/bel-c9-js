const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/register", async (req, res) => {
  const body = req.body;
  const dbUser = await User.create(body);
  res.send({ user: dbUser });
});

module.exports = router;
