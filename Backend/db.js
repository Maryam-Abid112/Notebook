//import mongoose 
const mongoose=require("mongoose");
// connection string for mongodb
const mongoURI ="mongodb://localhost:27017/Notebook"

const connecttomongo=async()=>{
    try{
       await mongoose.connect(mongoURI);
       console.log("Connected to Mongodb");
}catch(err){
    console.log("Error: ",err);
}
}
module.exports=connecttomongo;


