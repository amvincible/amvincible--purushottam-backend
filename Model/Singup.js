const mongoose = require("mongoose");

const contact = mongoose.Schema({
  name: {
    type: String,
  },
  payment: {
    type: String,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
  amount: {
    type: String,
  },
});

module.exports = mongoose.model("contact", contact);
