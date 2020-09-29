const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 1, "Password must be at least 1 characters."]
    },
    homeAddress: {
        address: String,
        city: String,
        zip: String,
        state: String,
    },
    concatenatedHomeAddress: String,
    googleApiInfoUrls: {
        votingLocationFinderUrl: String,
        electionInfoUrl: String,
        ballotInfoUrl: String
    }
});

userSchema.pre("save", function(){
   return bcrypt.hash(this.password, 10).then(hash=> {
        this.password = hash;
    })
});

userSchema.methods.concatenateHomeAddress = function() {
    return this.concatenatedHomeAddress = this.homeAddress.address
        + ' ' + this.homeAddress.city 
        + ' ' + this.homeAddress.zip 
        + ' ' + this.homeAddress.state;
}

userSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
