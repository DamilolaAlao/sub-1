const Sequelize = require("sequelize");

//import sequelize setup config
const sequelize = require("../config/database");

//create product schema
const Product = sequelize.define("Product", {
  Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  Sku: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  QuantityOnHand: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
