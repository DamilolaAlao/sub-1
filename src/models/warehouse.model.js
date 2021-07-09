const Sequelize = require("sequelize");

//import sequelize setup config
const sequelize = require("../config/database");

//create warehouse schema
const Warehouse = sequelize.define("Warehouse", {
  WarehouseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  QuantityOnHand: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  WarehouseSKU: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  IsActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  IncludeInSyncBalance: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Warehouse;
