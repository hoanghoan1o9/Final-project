const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BmiSchema = new mongoose.Schema(
  {
    result: { type: String, required: true },
    height: { type: String },
    weight: { type: String },
    status: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bmis", BmiSchema);
