var express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/practicekaro', { useNewUrlParser: true, useUnifiedTopology: true });
// Schema
// Schema matlab banne wala har document mein kya kya hoga
// how to create a schema

const userSchema=mongoose.Schema({

username:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
age:{
    type: Number,
    required: true
  }
})

// Model

// const User=mongoose.model('name_of_model',Schema_name);


module.exports= mongoose.model('User',userSchema);










// Connect to MongoDB
