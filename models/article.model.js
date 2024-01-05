const mongoose = require('mongoose');

const articleSchema = {
    title: String,
    content: String
  };
  
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;