const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Card', cardSchema)
