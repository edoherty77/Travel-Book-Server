const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemorySchema = new Schema({
  location: {
    latitude: String,
    longitude: String,
  },
  type: String,
  means: String,
  photo: String,
})

const Memory = mongoose.model('Memory', MemorySchema)

module.exports = Memory
