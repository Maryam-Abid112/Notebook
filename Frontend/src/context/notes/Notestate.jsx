import NoteContext from "./notecontext";
import react from "react";
import { useState } from "react";
import axios from 'axios';

const Notestate=(props)=>{
    const noteadd=[
  {
    "_id": "6a7d89f08a14f1cad3033270",
    "title": "Work",
    "Description": "please complete this work",
    "user": "6a72f29e22afccd53da77a4b",
    "date": "2026-08-13T09:10:08.412Z",
    "__v": 0
  },
  {
    "_id": "6a7d89f08a14f1cad3033273",
    "title": "Work",
    "Description": "please complete this work",
    "user": "6a72f29e22afccd53da77a4b",
    "date": "2026-08-13T09:10:08.412Z",
    "__v": 0
  },
  {
    "_id": "6a7d89f08a14f1cad3033277",
    "title": "Work",
    "Description": "please complete this work",
    "user": "6a72f29e22afccd53da77a4b",
    "date": "2026-08-13T09:10:08.412Z",
    "__v": 0
  },
  {
    "_id": "6a7d89f08a14f1cad3033278",
    "title": "Work",
    "Description": "please complete this work",
    "user": "6a72f29e22afccd53da77a4b",
    "date": "2026-08-13T09:10:08.412Z",
    "__v": 0
  },
   {
    "_id": "6a7d89f08a14f1cad3033271",
    "title": "Beat",
    "Description": "please complete this work",
    "user": "6a72f29e22afccd53da77a4b",
    "date": "2026-08-13T09:10:08.412Z",
    "__v": 0
  }
]

const [notes,setNotes]=useState(noteadd);

const addnote=async(title,description,tag)=>{
  console.log("Adding a new note");
  //api call
  try{
  const response=await axios.post("http://localhost:3000/api/notes/addnote",{
    title,
    description,
    tag
  },
  {
    headers: {
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzJmMjllMjJhZmNjZDUzZGE3N2E0YiIsImlhdCI6MTc4Njg0MDE1NSwiZXhwIjoxNzg2ODQzNzU1fQ.a3sJWgAQXA-B0hX-o_RPgagBUG-KFZ1CyP8O1XBPRFs"
    }
  });

  console.log(response);
  console.log("notes added");
}catch(err){
  console.log("Error ",err);
}

}
const deletenote=(noteid)=>{

  console.log("Deleting note");
  // api call
  const newnotes=notes.filter((notes)=>{
     return notes._id!=noteid
   })
  
   setNotes(newnotes);
 
}
const editnote=(id, title, description,tag)=>{
   console.log("Editing the note");

   const edit=notes.map((note)=>{
    if(note._id==id){
      return{
        ...note,
      Description:description,
      title:title
      }

    }
   });
   setNotes(edit);


}
    return(
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default Notestate;