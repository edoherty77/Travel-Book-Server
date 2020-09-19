const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemorySchema = new Schema({
  location: {
    latitude: Number,
    longitude: Number,
  },
  locationName: String,
  type: String,
  transpo: String,
  photo: String,
})

const Memory = mongoose.model('Memory', MemorySchema)

module.exports = Memory
