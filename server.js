const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const express = require('express');

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

// connect to the mongo database
mongoose.connect('mongodb://localhost/animalNews', { useNewUrlParser: true });
mongoose.connection.on('error', function () {
  console.error('MongoDB Connection Error.');
});

// route to scrape
app.get("/scrape", function (req, res) {

  // use axios to get all the data from the website
  axios.get('https://www.nationalgeographic.com.au/news/animals.aspx').then(function (response) {
    // console.log(response.data);

    // use cheerio to pull out specific data
    const $ = cheerio.load(response.data);

    // Padding is the class which holds the desired text elements
    $('.Padding').each((i, el) => {
      // empty object that will store the data
      const result = {};

      // save each element to the result object
      result.pub_date = $(el).children('.Byline').text();
      result.headline = $(el).children('.Title').text();
      result.summary = $(el).children('.Description').text();
      result.url = $(el).children('a').attr('href');
      console.log(result);

      // add the result object to the database using the schema created in "model.js"
      db.Article.create(result).then((dbArticle) => {
        console.log("START ARTICLES")
        console.log(dbArticle);
      }).catch((error) => {
        console.log(error);
      });
    });
  });

});

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
