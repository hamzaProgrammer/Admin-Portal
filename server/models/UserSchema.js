const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type : String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type : String,
            required: true
        },
        profilePic:{
           type: String
        }
    },
    {
        timestamps: true
    }
);


const Users = mongoose.model('USERS', UserSchema);

module.exports = Users