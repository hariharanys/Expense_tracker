const Register = require("../schema/register_schema");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const login_controller = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await Register.findOne({
      username: username,
      password: password,
    }).exec();
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "Incorrect username and password" });
    }
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET);
    return res
      .status(200)
      .json({ message: `Welcome ${username}!!!`, token: token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = login_controller;
