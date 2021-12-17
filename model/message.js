const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bot1 schema and model
const messageSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is requaired"],
  },
  newsText: {
    type: String,
    required: [true, "Text is required"],
  },
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
