

const mongoose=require("mongoose");
const patientmodel=new mongoose.Schema({
    name:String,
    phoneno:String,
    address:String,
    symptems:String
   


})

module.exports=mongoose.model("patient",patientmodel);
