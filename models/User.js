const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", function(){
    bcrypt.hash(this.password, 10).then(hash=> {
        this.password = hash;
    })
});

userSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
