const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/intermediatemongodb');

// Create a schema

const userSchema = new mongoose.Schema({

    username: String,
    nickname: String,
    description: String,
    categories:{
        type: Array,
        default:[]
    },
    datecreated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);

