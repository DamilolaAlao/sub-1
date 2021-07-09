const Sequelize = require("sequelize");

// get db_url config
const { Db_Url } = require("./index");

//setup sequelize
const sequelize = new Sequelize(Db_Url, {
  define: {
    // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
    // This was true by default, but now is false by default
    timestamps: false,
  },
});

module.exports = sequelize;
