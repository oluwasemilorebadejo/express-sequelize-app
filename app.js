const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const db = require("./config/database");

// Test DB Connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();

app.get("/", (req, res) => res.send("INDEX"));

app.use("/gigs", require("./routes/gigs"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
