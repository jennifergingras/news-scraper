const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

module.exports = function (app) {
  // route to scrape
  app.get("/api/scrape", function (req, res) {

    // use axios to get all the data from the website
    axios.get('https://www.nationalgeographic.com.au/news/animals.aspx').then(function (response) {
      // console.log(response.data);

      // use cheerio to pull out specific data
      const $ = cheerio.load(response.data);

      // empty the database collection before scraping again

      // Padding is the class which holds the desired text elements
      $('.Padding').each((i, el) => {
        // empty object that will store the data
        let result = {};

        // save each element to the result object
        result.pub_date = $(el).children('.Byline').text();
        result.headline = $(el).children('.Title').text();
        result.summary = $(el).children('.Description').text();
        result.url = $(el).children('a').attr('href');
        // console.log(result);

        // add the result object to the database using the schema created in "model.js"
        db.Article.create(result).then((dbArticle) => {
          // console.log("START ARTICLES")
          console.log(dbArticle);
        }).catch((error) => {
          console.log(error);
        });
      });
    });
  });



};