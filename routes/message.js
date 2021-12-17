const express = require("express");
const router = express.Router();
const Message = require("../model/message");
//setting the operations for the messages(get,post)
//get
//We would get all the messages in our database and would send them all as a response
router.get("", function (req, res, next) {
  Message.find({})
    .then(function (message) {
      res.send(message);
    })
    .catch(next);
});
//post for cyber news message
//We create a new message in the database and then return the created message as a response
router.post("", function (req, res, next) {
  Message.create(req.body)
    .then(function (message) {
      res.send(message);
      res.status(200);
    })
    .catch(next);
});

//export module
module.exports = router;
