const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const jwtsecret = require("../../config/keys").jwt;
router.post("/",(req,res)=>{
  if (req.body.email && req.body.password ) {
    const {email,password} = req.body;

    User.findOne({email:email}).then(user=>{
      if(user){
        const authBool = bcrypt.compareSync(password,user.hash);
        if(authBool){
          const token = jwt.sign({email:user.email},jwtsecret);
          console.log(token);
          res.json(token);
        }else{
          res.json("Email or password is invalid");
        }
      }else{
        res.json("Email or password is invalid");
      }
    });
  }else{
    res.json("Enter your email and password");
  }
});

module.exports=router;
