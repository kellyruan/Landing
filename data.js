const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    name: String,
    email: String,
    school: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);