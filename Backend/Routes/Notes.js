const express = require('express');
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');
const note=require('../models/Notes');


// fetching all the notes of the user using get request     
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    try{
        const user=req.user.id;
        const notes=await note.find({user:user});
        res.json(notes);


    }catch(err){
        console.error(err.message);
        res.status(500).send("Internal server error");
    }
    
});

// adding the note to the database using post request
router.post('/addnote',fetchuser,async(req,res)=>{ 
    try{
    const user=req.user.id;
    const {title,description,tag}=req.body;
    const newnote= await note.create({
        title:title,
        Description:description,
        tags:tag,
        user:user
    });
    res.json(newnote);
}catch(err){
    console.error(err.message);
    res.status(500).send("Internal server error");  }

});

module.exports = router;