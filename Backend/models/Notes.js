const mongoose=require('mongoose');
// schemas
// structure of the collection
const notesschema=new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     Description:{
        type:String,
        required:true
     },
     tags:{
        type:String 
     },
      date:{
        type:Date,
        default: Date.now 
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }



})

module.exports=mongoose.model("Notes",notesschema);
