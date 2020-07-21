const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

//
//
//
//
//
//
//

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_3sf36vkl:qwer1234@ds163330.mlab.com:63330/heroku_3sf36vkk"
);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
