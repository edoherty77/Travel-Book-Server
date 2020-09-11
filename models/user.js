const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
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

const User = mongoose.model('User', UserSchema)

module.exports = User
