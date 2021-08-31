const mongoose = require('mongoose');

// Article Schema
const Schema = mongoose.Schema({
  index: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});
const Owner = mongoose.model('Owner', Schema);
module.exports.Owner = Owner;
