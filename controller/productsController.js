const productsModel = require("../mongoDB/productsModel");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const products = await productsModel.find({});
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  },
  getById: async function (req, res, next) {
    try {
      const product = await productsModel.findById(req.params.id);
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  },
  create: async function (req, res, next) {
    try {
      const { title, price, description, category, image } = req.body;
      const product = new productsModel({
        title,
        price,
        description,
        category,
        image,
      });
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
  delete: async function (req, res, next) {
    try {
      const deleteResponse = await productsModel.deleteOne({
        _id: req.params.id,
      });
      res.status(200).json(deleteResponse);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  },
  update: async function (req, res, next) {
    try {
      const updateResponse = await productsModel.updateOne(
        {
          _id: req.params.id,
        },
        req.body
      );
      res.status(200).json(updateResponse);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  },
};
