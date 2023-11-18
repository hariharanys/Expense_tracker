const Register = require("../schema/register_schema");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }
    const newUser = new Register({ username, email, password });
    await newUser.save();
    res.status(200).json({ message: `${username} registered successfully` });
  } catch (e) {
    console.error("Error regestering user: ", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerController;
