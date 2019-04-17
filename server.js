const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars')

// reference to the mongoose schema for the database
const db = require("./models");

var PORT = 3000;

// Initialize Express
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// set up handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// connect to the mongo database
mongoose.connect('mongodb://localhost/animalNews', { useNewUrlParser: true });
mongoose.connection.on('error', function () {
  console.error('MongoDB Connection Error.');
});

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
