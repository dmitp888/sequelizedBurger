// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connnection");

var Burger = sequelize.define("burger",{
  // routeName: Sequelize.STRING,
  burger_name: Sequelize.STRING,
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}
);
  // Export the database functions for the controller (burgersController.js).
  module.exports = Burger;
  // Dependencies
// =============================================================




// Syncs with DB
Burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Burger;
