const Register = require("../schema/register_schema");

const delete_user_controller = async (req, res) => {
  try {
    const { email } = req.body;
    const userToDelete = await Register.findOneAndDelete({
      email: email,
    }).exec();
    if (!userToDelete) {
      return res
        .status(404)
        .json({ error: "User not found or credentials is incorrect" });
    }
    res.status(200).json({ message: `${email} is deleted successfully` });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = delete_user_controller;
