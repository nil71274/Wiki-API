const Article = require("../models/article.model");

async function handleGetAllArticles(req, res){
    await Article.find(function(err, foundArticles){
        if (!err) {
          res.send(foundArticles);
        } else {
          res.send(err);
        }
    });
}
async function handleCreateArticle(req, res){
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
      });
    
      await newArticle.save(function(err){
        if (!err){
          res.send("Successfully added a new article.");
        } else {
          res.send(err);
        }
      }); 
}
async function handleDeleteAllArticles(req, res){
    await Article.deleteMany(function(err){
        if (!err){
          res.send("Successfully deleted all articles.");
        } else {
          res.send(err);
        }
      });
}
async function handleGetOneArticle(req, res){
    await Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No articles matching that title was found.");
        }
      });
}
async function handleUpdateOneArticle(req, res){
    await Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
          if(content == null) return res.send()
          if(!err){
            res.send("Successfully updated the selected article.");
          }
        }
      );
}
async function handlePatchOneArticle(req, res){
    await Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
          if(!err){
            res.send("Successfully updated article.");
          } else {
            res.send(err);
          }
        }
    );
}
async function handleDeleteOneArticle(req, res){
    await Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
          if (!err){
            res.send("Successfully deleted the corresponding article.");
          } else {
            res.send(err);
          }
        }
      );
}



module.exports = {
    handleGetAllArticles,
    handleCreateArticle,
    handleDeleteAllArticles,
    handleGetOneArticle,
    handleUpdateOneArticle,
    handlePatchOneArticle,
    handleDeleteOneArticle
}