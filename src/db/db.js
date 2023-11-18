const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URI || "mongodb://localhost:27017";

mongoose.Promise = Promise;

const InitializeMongoDb = () => {
  return mongoose.connect(MONGO_URL, {
    auth: {
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
    },
    dbName: process.env.MONGO_DB_NAME,
  });
};

module.exports = InitializeMongoDb;
