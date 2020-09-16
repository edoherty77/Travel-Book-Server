const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemorySchema = new Schema({
    location: String,
    type: String,
    means: String,
})

const Memory = mongoose.model('Memory', MemorySchema)

module.exports = Memory