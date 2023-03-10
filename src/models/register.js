const mongoose = require("mongoose");

const credintalSchema= new mongoose.Schema({
      username : {
        type:String,
        required:true
      },
      email : {
        type:String,
        required:true,
        unique:true
      },
      phone:{
        type:Number,
        required:true,
        unique:true
      },
      age:{
        type:Number,
        required:true  
      },
      password: {
        type:String,
        required:true
      },
      confirmpassword:{
        type:String,
        required:true
      }
})
const Register = new mongoose.model("Register", credintalSchema);
module.exports= Register; 
