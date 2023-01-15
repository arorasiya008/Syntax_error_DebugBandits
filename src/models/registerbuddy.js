const mongoose = require("mongoose");

const buddySchema= new mongoose.Schema({
    train_no:{
        type :Number,
        required :true
    },
    date :{
        type: String,
        required :true
    },
    entry_station:{
        type: String,
        required:true
    },
    destination_station:{
        type: String,
        required:true
    }
    

});
const Traveller = new mongoose.model("Traveller",buddySchema);
module.exports=Traveller;