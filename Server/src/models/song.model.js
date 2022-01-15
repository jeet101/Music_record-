const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name:{type: 'string',required: true,unique: true},
  duration:{type: 'string',required: true}
})

const Song = mongoose.model('Song',songSchema);

module.exports = Song;