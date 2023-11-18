const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const Register = mongoose.model("registrations", registerSchema);

module.exports = Register;
