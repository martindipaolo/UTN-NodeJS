const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGOOSE_DB_URI)
  .then(() => console.log("Database connection OK"))
  .catch((error) => console.log(error));

module.exports = mongoose;
