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
        validate: [({ length }) => length >= 6, "Password must be at least 6 characters."]
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
    }, 
    representatives: {
        type: Array,
        default: []
    }
});

userSchema.pre("save", function(){
    if (this.isNew) {
        return bcrypt.hash(this.password, 10).then(hash=> {
            this.password = hash;
        })
    } else return;
});

userSchema.methods.concatenateHomeAddress = function() {
     this.concatenatedHomeAddress = this.homeAddress.address
        + ' ' + this.homeAddress.city 
        + ' ' + this.homeAddress.zip 
        + ' ' + this.homeAddress.state;
    return this.concatenatedHomeAddress
}

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
