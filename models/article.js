const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// create a new Schema object (the model used for each article that will be scraped)
// this will define the data to be saved in the database
var ArticleSchema = new Schema({
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
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// creates the model from the schema using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;