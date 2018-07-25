const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const habitSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = Habit = mongoose.model("habit", habitSchema);
