const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TripSchema = new Schema({
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

const Trip = mongoose.model('Trip', TripSchema)

module.exports = Trip