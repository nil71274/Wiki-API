const express = require('express');
const {
  handleGetAllArticles,
  handleCreateArticle,
  handleDeleteAllArticles,
  handleGetOneArticle,
  handleUpdateOneArticle,
  handlePatchOneArticle,
  handleDeleteOneArticle} = require("../controllers/article.controller");

const router = express.Router();


///////////////////////////////////Requests Targetting all Articles////////////////////////

router.route("/")

.get(handleGetAllArticles)

.post(handleCreateArticle)

.delete(handleDeleteAllArticles);

////////////////////////////////Requests Targetting A Specific Article////////////////////////

router.route("/:articleTitle")

.get(handleGetOneArticle)

.put(handleUpdateOneArticle)

.patch(handlePatchOneArticle)

.delete(handleDeleteOneArticle);


module.exports = router;