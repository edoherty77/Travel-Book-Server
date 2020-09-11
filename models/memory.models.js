const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemorySchema = new Schema({
    spotifyId: {type: String,unique: true},
    name: {type: String}, 
    refresh: {type: String,required: true},
    access: {type: String,required: true},
    loggedIn: Boolean,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    admin: Boolean
})

const Memory = mongoose.model('Memory', MemorySchema)

module.exports = Memory