require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");
const graphqlHttp = require("express-graphql");

const graphqlSchema = require("./graphql/schema.graphql");
const graphqlResolver = require("./graphql/resolver.graphql");


const app = express();

app.use("/graphql", graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true
}));

app.locals._ = lodash;
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
  text: String,
});

const Post = mongoose.model("Post", postSchema);



app.listen(process.env.PORT || 4000, () => {
  console.log("Started on localhost 4000");
});
