const db = require('../models');

module.exports = (app) => {
  // index page displaying all the articles
  app.get('/', function (req, res) {
    db.Article.find({}).then(function (dbArticle) {
      res.render("index", {
        articles: dbArticle
      });
    });
  });

  app.get('*', (req, res) => {
    res.render("404");
  });
};