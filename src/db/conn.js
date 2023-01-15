 const mongoose =require("mongoose");
 mongoose.connect( "mongodb+srv://parthkp18:HW0aCgQ2H6Skiy6h@cluster0.6wj29tz.mongodb.net/Syntax-error",{

 }).then(()=>{
    console.log(`connection successful`);

 }).catch((e)=>{
    console.log(`no connection`);
 })