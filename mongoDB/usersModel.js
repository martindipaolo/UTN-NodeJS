const mongoose = require("../config/mongoose-db");
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
});

usersSchema.set("toJSON", {
  transform(doc, ret) {
    delete ret.password;
  },
});

usersSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("Users", usersSchema);
