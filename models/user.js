const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }],
  email: String,
  birthday: Date
})

const User = mongoose.model('User', UserSchema)

module.exports = User