const { Sequelize } = require("sequelize");

const db = new Sequelize("codegig", "postgres", "5560", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
