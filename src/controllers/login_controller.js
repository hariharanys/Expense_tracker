const Register = require("../schema/register_schema");

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
    return res.status(200).json({ message: `Welcome ${username}!!!` });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = login_controller;
