const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  //profileImage: { type: String, },
  mainCharacter: {type: Schema.Types.ObjectId, ref: "Character"},
  city: { type: String, },
  state: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;