// const express = require("express");
const router = require("express").Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  if (!username || !password || !email)
    return res
      .status(400)
      .json({
        success: false,
        message: "Missing username and/or password and/or email",
      });

  try {
    const user = await User.findOne({ email: email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Email already be used" });
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      email: email,
      username: username,
      password: hashedPassword,
    });
    await newUser.save();
    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id, isAdmin: newUser.isAdmin },
      process.env.SECRET_KEY
    );
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //simple validation
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing email and/or password" });

  try {
    //check if the user exists
    const user = await User.findOne({ email });
    console.log(user);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });
    //Email found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });

    // All good
    // Return token
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY
    );

    // const { ...info } = user._doc;

    res.status(200).json({
      success: true,
      user:user,
      message: "User logged in successfully",
      accessToken,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
