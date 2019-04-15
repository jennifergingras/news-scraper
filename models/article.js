const mongoose = require('mongoose');

// create a new Schema object (the model used for each article that will be scraped)
// this will define the data to be saved in the database
var ArticleSchema = new mongoose.Schema({
  pub_date: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// creates the model from the schema using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;