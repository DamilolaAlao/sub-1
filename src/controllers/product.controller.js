const Product = require("../models/product.model");
const Warehouse = require("../models/warehouse.model");

// Create and Save Products
exports.create = (req, res) => {
  const productArray = req.body.productArray;
  // Validate request
  if (!productArray || productArray.length === 0) {
    return res.status(400).send({
      message: "Product array can not be empty",
    });
  }

  // Create Products
  Product.bulkCreate(productArray, {
    include: Warehouse,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      if (err.message == "Validation error") {
        res.status(500).send({ message: "Records already exists" });
      } else {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product.",
        });
      }
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  Product.findAll({ include: Warehouse })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};
