const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  text: String,
  author: String,
  timestamp: new Date(),
})

module.exports = mongoose.model('Card', userSchema)
