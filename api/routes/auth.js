const CryptoJS = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const { email, username } = req.body;
  if (!email || !username)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  try {
    const user = await User.find({ email, username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
