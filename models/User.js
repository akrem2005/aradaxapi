// File: models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  profile: String,
});

module.exports = mongoose.model("User", userSchema);
