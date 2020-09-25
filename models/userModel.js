const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  // address, other info
})



UserSchema.methods.myMethod = function() {
  // custom methods such as full name or full address
}


const User = mongoose.model("User", userSchema);
module.exports = User;