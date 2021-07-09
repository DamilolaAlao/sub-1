const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller.js");

//Get Products
router.get("/", productController.findAll);

//Create Products
router.post("/", productController.create);

module.exports = router;
