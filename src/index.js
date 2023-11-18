const IntializeMongoDb = require("./db/db");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const cors = require("cors");
const routes = require("./routes/routes");
const logRequest = require("./middleware/application_middleware");
const errorHandler = require("./middleware/error_handler_middleware");
const bodyparser = require("body-parser");
dotenv.config();

const app = express();

const server = http.createServer(app);

IntializeMongoDb()
  .then(() => {
    console.log(process.env.MONGO_DB_NAME, "connected successfully");
    app.use(
      cors({
        credentials: true,
      })
    );
    app.use(express.json());
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
    app.use(logRequest);
    app.use("/api", routes);
    app.use(errorHandler);
    server.listen(process.env.PORT, () => {
      console.log(`Server running on the port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });
