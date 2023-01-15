const express =require("express");
const path=require("path");
const app=express();
const hbs = require("hbs");
const mongoose = require("mongoose");
require('dotenv').config()

//Port number setup

//require("./db/conn");
const Register= require("./models/register");
const Traveller=require("./models/registerbuddy");
const {json}=require("express");
const { sign } = require("crypto");
const {log}=require("console");


const port=process.env.PORT || 8800;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

const mongoString = process.env.MONGO_STRING;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/findpage",(req,res)=>{
    res.render("findpage");
});
app.get("/registerpage",(req,res)=>{
    res.render("registerpage");
});
app.get("/signup",(req,res)=>{
        res.render("signup");
});
app.post("/signup",async(req,res)=>{
    try{

    const username = req.body.uname
    const password = req.body.pswrd;
    const cpassword = req.body.confPswrd;
    console.log(req);
    console.log(password);
    console.log(cpassword);
    if(password === cpassword){
           const signupCredintal = new Register({
            username:req.body.uname,
            email:req.body.email,
            phone:req.body.phn,
            age:req.body.age,
            password:password,
            confirmpassword:cpassword
           })
    
        console.log("if true");
        console.log(signupCredintal);
        const registered = await signupCredintal.save();
       
   
        res.status(201).render("option");
    }else{
        console.log("if false");
        res.send("passwords are not matching")
    }

      

    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/login",async(req,res)=>{

    // try{
        const username = req.body.uname;
    
        //const username=req.body.uname;
            
        const password=req.body.psw;
    const useremail=  await Register.findOne({username: username}).exec();
    if(useremail.password===password)
    {
        res.status(201).render("option");
         
    }else
    {
        res.send("password is not matching");
    }
// } catch(error)
//    { res.status(400).send("invalid username");
//    throw error;
// }
});

app.post("/findpage",async(req,res)=>{
    const {TrainNo,Date} =req.body
    console.log(TrainNo," ",Date)
        try {
          const result = await Traveller.find({});
          res.render("viewBuddy",{data: result} );
        } catch (error) {
          return error;
        }


});

app.listen(port,()=>{
    console.log(` server is running at port Node. ${port}`);
});




app.post("/registerpage",async(req,res)=>{
    try{
            const registerpagebuddy = new Traveller({
            train_no:req.body.TrainNo,

            date:req.body.Date,
            entry_station:req.body.Entry,
            destination_station:req.body.Exit
           });
        
        
        console.log(registerpagebuddy);
        const registration = await registerpagebuddy.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(400).send(error);
    }
});



    
