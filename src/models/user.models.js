const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  rol: {
    type: String,
    enum: ["ADMIN, USER"],
    default: "USER"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;