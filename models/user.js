const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
  email: String,
  birthday: Date,
  googleId: String,
  avatar: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
