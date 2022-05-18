const User = require("../model/user");
const bcrypt = require("bcrypt");

const router = require("express").Router();
//signup
router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });
  try {
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).json({ message: "no" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(404).json({ message: "no" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
