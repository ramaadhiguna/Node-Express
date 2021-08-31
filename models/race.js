const mongoose = require('mongoose');

// Article Schema
const Schema = mongoose.Schema({
  index: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  }
});
const Race = mongoose.model('Race', Schema);
module.exports.Race = Race;
