const jwt = require("jsonwebtoken");

const token = {
  async validate(req, res, next) {
    jwt.verify(
      req.headers["x-access-token"],
      req.app.get("secretKey"),
      function (err, decoded) {
        if (err) {
          res.status(401).json(err);
        } else {
          req.body.userId = decoded.id;
          next();
        }
      }
    );
  },

  async create(userId, secret) {
    return jwt.sign({ userId }, secret, {
      expiresIn: "1h",
    });
  },
};

module.exports = token;
