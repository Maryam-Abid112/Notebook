const express = require('express');
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');
const note=require('../models/Notes');
const { body, validationResult } = require('express-validator');


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
router.post('/addnote',[
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
],fetchuser,async(req,res)=>{ 
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const user=req.user.id;
    const {title,description,tag}=req.body;
    const newnote= await note.create({
        title:title,
        Description:description,
        tags:tag,
        user:user
    });

    res.json(newnote)
}catch(err){
    console.error(err.message);
    res.status(500).send("Internal server error");  }

});

// updating the note
router.post('/updatenote/:id',fetchuser,async(req,res)=>{
    try{
        const id=req.user.id;
        const {title,description,tag}=req.body;
        const newnote={};
        if(title){newnote.title=title};
        if(description){newnote.Description=description};
        if(tag){newnote.tags=tag};

        // finding the note to be updated
        const noteid=req.params.id;
        const notes= await note.findById(noteid);
        

         // checking note exists or not
        if(!notes){
            return res.status(404).send("Not found");
        }
        // checking if the note belongs to the user or not
        if(notes.user.toString()!==id){
            return res.status(401).send("Not allowed");
        }
        
        updatenote= await note.findByIdAndUpdate(noteid,{$set:newnote},{new:true});
        res.send(updatenote);
    }catch(err){
            console.error(err.message);
            res.status(500).send("Internal server error");
        }

}
    )

    //deleting the note
router.delete('/delete/:id',fetchuser,async(req,res)=>{
    try{
        const userid=req.user.id;
        const notesid=req.params.id;
        const notes=await note.findById(notesid);
        if(!notes){
            console.log("Note not found");
            res.status(404).send("Notes not found");

        }
        if(notes.user.toString()!=userid){
            console.log("No access");
            res.status(401).send("Not Allowed");
        }

        const deletenote=await note.findByIdAndDelete(notesid);
        res.send("note deleted");

    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;