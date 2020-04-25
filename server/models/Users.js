const mongoose = require("mongoose");
const crypto = require('crypto');

// Create Schema
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    },
);

module.exports = User = mongoose.model("users", UserSchema);