const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");

const Bmi = require("../models/Bmi");

//get api bmi
//private
router.get("/", verify, async (req, res) => {
  try {
    const bmis = await Bmi.find({ user: req.userId }).populate("user", [
      "username",
    ]);
    res.json({ success: true, bmis: bmis });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//post api bmi
// create bmi
//private
router.post("/", verify, async (req, res) => {
  const { height, weight } = req.body;

  //simple validation
  if (!height || !weight)
    return res
      .status(400)
      .json({ success: false, message: "Height and weight are required" });

  try {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    const newBmi = new Bmi({
      result: bmi,
      height: height,
      weight: weight,
    });

    await newBmi.save();

    res.json({ success: true, message: "Calculated!", bmi: newBmi });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/bmis
// @desc DELETE bmi
// @access Private
router.delete("/:id", verify, async (req, res) => {
  try {
    const bmiDeleteCondition = { _id: req.params.id, user: req.userId };
    const deleteBmi = await Bmi.findByIdAndDelete(bmiDeleteCondition);

    // User not authorized to delete bmi or bmi not found
    if (!deleteBmi)
      return res.status(401).json({
        success: false,
        message: " User not authorized to update bmi or bmi not found",
      });

    res.json({
      success: true,
      bmi: deleteBmi,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
