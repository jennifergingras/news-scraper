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

  // // Route for getting all Articles from the db
  // app.get("/articles", function (req, res) {
  //   // Grab every document in the Articles collection
  //   db.Article.find({})
  //     .then(function (dbArticle) {
  //       // If we were able to successfully find Articles, send them back to the client
  //       res.json(dbArticle);
  //     })
  //     .catch(function (err) {
  //       // If an error occurred, send it to the client
  //       res.json(err);
  //     });
  // });

  // Save a note
  app.post("/note/save", function (req, res) {
    db.Note.create(req.body)
    console.log(req.body)
      .then(function (dbNote) {
        return db.Article.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
      })
      .then(function (dbArticle) {
        res.json(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });



  // app.post("/note", function(req, res) {
  //   db.Note.create(req.body).then(function(data){
  //     db.Article.findOneAndUpdate({_id: req.body.Article})
  //   })
  // })

};