const mongoose = require('mongoose');

// Article Schema
const Schema = mongoose.Schema({
  index: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
const Sapi = mongoose.model('Sapi', Schema);
module.exports.Sapi = Sapi;
