const mongoose = require("../config/mongoose-db");

const productsSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  description: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Products", productsSchema);
