const express = require("express");
const registerController = require("../controllers/register_controller");
const delete_user_controller = require("../controllers/delete_user_controller");
const login_controller = require("../controllers/login_controller");

const router = express.Router();

router
  .post("/register", registerController)
  .delete("/delete_user", delete_user_controller)
  .post("/login", login_controller);

module.exports = router;
