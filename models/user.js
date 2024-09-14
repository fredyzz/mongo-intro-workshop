const mongoose = require("mongoose");

// 1. Define user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  betaUser: {
    type: Boolean,
    default: false,
  },
  birthDate: Date,
  pets: [{ type: String }],
  address: {
    other: Boolean,
    street: String,
    houseNumber: Number,
    zip: Number,
    city: String,
    State: String,
  },
  // 1.1 Define the relationship between user and school
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "school",
  },
});

// 2. Define school schema
const schoolSchema = new mongoose.Schema({
  other: Boolean,
  street: String,
  houseNumber: Number,
  zip: Number,
  city: String,
  State: String,
});

const User = mongoose.model("user", userSchema);
const School = mongoose.model("school", schoolSchema);

module.exports = { User, School };
