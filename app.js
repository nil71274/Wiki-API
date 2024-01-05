//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const articleRouter = require("./routes/article.route");
const {mongoConnect} = require("./connections/mongodb.connection");
const {txtReqRes} = require("./middlewares/txtReqRes.middleware");

const app = express();

app.use(express.urlencoded({extended: false}));

mongoConnect();
 
// app.use(txtReqRes);

app.use('/', articleRouter);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
 