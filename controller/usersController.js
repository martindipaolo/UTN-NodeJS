const usersModel = require("../mongoDB/usersModel");
const bcrypt = require("bcrypt");
const token = require("../util/jwt");

module.exports = {
  get: async function (req, res, next) {
    try {
      const users = await usersModel.find({});
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  },
  register: async function (req, res, next) {
    try {
      const { fullName, email, password } = req.body;
      const user = usersModel({ fullName, email, password });
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
  login: async function (req, res, next) {
    try {
      const user = await usersModel.findOne({ email: req.body.email });
      console.log(req);
      console.log(user);
      if (!user) {
        return res.status(401).json("Usuario o contraseña incorrecta");
      }

      const match = bcrypt.compareSync(req.body.password, user.password);

      if (!match) {
        return res.status(401).json("Usuario o contraseña incorrecta");
      } else {
        const newToken = await token.create(user._id, req.app.get("secretKey"));
        res.status(200).json(newToken);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
};
