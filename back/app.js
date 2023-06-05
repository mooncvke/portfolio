const config = require("./utils/config.js");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("express-async-errors");

const imageRouter = require("./controllers/imageRouter.js");
const middleware = require("./utils/middleware.js");
const logger = require("./utils/logger.js");

logger.info("connecting to", config.MONGODB_URI);
const url = config.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB: ", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api", imageRouter);
app.use(middleware.errorHandler);

module.exports = app;
