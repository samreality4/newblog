//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
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
  image: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/data", (req, res) => {
  Post.find({}, null, { sort: "-date" }, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.send(posts);
    }
  });
});

app.post("/compose", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    color: req.body.color,
    date: req.body.date,
    image: req.body.image,
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
