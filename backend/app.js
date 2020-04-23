//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.locals._ = lodash;
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection err:"));
db.once("open", () => {
  console.log("we are connected!");
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  date: Date,
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  Post.find({}, function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.send(posts);
    }
  });
});

app.get("/posts/:id", (req, res) => {
  Post.findById({ _id: req.params.id }, function (err, post) {
    res.send(post);
  });
});

app.post("/compose", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    color: req.body.color,
    date: req.body.date,
  });

  newPost.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started");
});
