const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

//initialize .env
require("dotenv").config();

// get port config
const { Port } = require("./config/");

// get sequelize config
const sequelize = require("./config/database");

//routes
const productRoutes = require("./routes/product.routes");

//models
const Product = require("./models/product.model");
const Warehouse = require("./models/warehouse.model");

// create express app
const app = express();

//cors options
var corsOptions = {
  origin: "*",
  credentials: true,
};

//enable cors
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Log requests to the console.
app.use(morgan("dev"));

// define routes
app.use("/", productRoutes);

//define model association relationships
Product.hasMany(Warehouse);
Warehouse.belongsTo(Product);

// Connecting to the database
sequelize.sync().catch((err) => {
  console.log(err);
});

// listen for requests
app.listen(Port, () => {
  console.log("Server is listening on port ", Port);
});
