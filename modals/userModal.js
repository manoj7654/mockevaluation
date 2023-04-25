const mongoose=require("mongoose");


            // for schema
const userSchema=mongoose.Schema({
       name:String,
       email:String,
       password:String
},{
    versionKey:false
})


    //    for modals
const Usermodal=mongoose.model("users",userSchema);

module.exports={Usermodal}