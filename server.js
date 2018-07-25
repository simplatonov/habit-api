const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const register = require("./routes/API/register");
const login = require("./routes/API/login");
const habits = require("./routes/API/habits");
const cors = require("cors");
const app = express();

//Cors
app.use(cors());

//bodyParser
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to the database
mongoose.connect(db,{ useNewUrlParser: true }).then(()=>console.log("MongoDB connected...")).catch(err=>console.log(err));

//Use routes

app.use("/api/login",login);
app.use("/api/register",register);
app.use("/api/habits",habits);
app.get("/",(req,res)=>{
  res.send("<h1>Hello</h1>");
})

const port = process.env.PORT || 5000;

app.listen(port,console.log(`Server started on port ${port}`));
