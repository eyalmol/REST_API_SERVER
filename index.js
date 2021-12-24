const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//set up our express app
const app = express();
//connect to mongoDB
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = global.Promise;
//add support to serve static files
app.use(express.static("public"));
//parse the data to json file
app.use(express.json());
app.use(cors());
//set the app to use the message.routes (will hold our operations)
app.use("/message", require("./routes/message"));
//handle errors that occurred during the operations
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
//listen for requests
app.listen(process.env.port || 4300, function () {
  console.log("Ready to Go!");
});
