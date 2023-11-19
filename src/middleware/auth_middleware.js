var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secreKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    const token = authorizationHeader.slice(7);
    if (token) {
      jwt.verify(token, secreKey, (err, decodedToken) => {
        if (err) {
          res.status(401);
          throw Error("Jwt not matched");
        } else {
          next();
        }
      });
    } else {
      res.status(401);
      throw Error("Unauthorized");
    }
  } else {
    res.status(401);
    throw Error("Pass Auth as Bearer Token");
  }
};

module.exports = authMiddleware;
