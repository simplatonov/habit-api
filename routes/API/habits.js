const express = require("express");
const Habit = require("../../models/Habit");
const jwtMiddleware = require("./jwtmiddleware");
const router = express.Router();

// @route GET api/habits
// @desc Get items for a single user
router.get("/",jwtMiddleware,(req,res)=>{
  Habit.find({user_name:req.userData.user_name}).sort({date:-1}).then(habits=>res.json(habits));
});

// @route POST api/habits
// @desc Create an item
router.post("/",jwtMiddleware,(req,res)=>{
  if(req.body.name){
    const newHabit = new Habit({
      name: req.body.name,
      email : req.userData.email
    });
    newHabit.save().then(habit=>res.json(habit));
  }else{
    res.json("You need to enter a name for your habit")
  }


});

// @route DELETE api/habits:id
// @desc Delete an item
router.delete("/:id",jwtMiddleware,(req,res)=>{
  Habit.findById(req.params.id).then(item=>item.remove()).then(()=>res.json({success:true}))
  .catch(err=>res.status(404).json({success:false}));

});

module.exports = router;
