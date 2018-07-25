const jwt = require("jsonwebtoken");
const jwtsecret = require("../../config/keys").jwt;

module.exports = (req,res,next) => {
  try{
    const decoded = jwt.verify(req.headers.authorization,jwtsecret);
    req.userData = decoded;
    next();
  }
  catch(error){
    return res.status(401).json("Auth failed")
  }


}
