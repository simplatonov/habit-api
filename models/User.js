const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const userSchema = new Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  
  hash:{
    type:String,
    required:true
  }
  ,
  date_joined:{
    type:Date,
    default:Date.now
  }
});

module.exports = User = mongoose.model("user", userSchema);
