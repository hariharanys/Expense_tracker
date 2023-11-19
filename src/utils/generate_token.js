var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = generateToken;
