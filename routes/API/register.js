const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/",(req,res)=>{
  if (req.body.email && req.body.password) {

    const {email,password} = req.body;
    const hash =  bcrypt.hashSync(password, 10);
    const newUser = new User ({
      email:email,

      hash:hash
    });

    newUser.save().then(user=>res.json(user)).catch(err=>res.json(err));


}else{
  res.json("Enter your email address and a password");
}
});

module.exports=router;
