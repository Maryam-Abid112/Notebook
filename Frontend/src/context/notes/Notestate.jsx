import NoteContext from "./notecontext";
import react, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';




const Notestate=(props)=>{
  const host= import.meta.env.VITE_API_URL;
  const [Notes,setNotes]=useState([]);

    useEffect(()=>{
      fetchapi();
    },[])

const addnote=async(title,description,tag)=>{
  console.log("Adding a new note");
  //api call
  try{
  const response=await axios.post(`${host}/api/notes/addnote`,{
    title,
    description,
    tag
  },
  {
    headers: {
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzJmMjllMjJhZmNjZDUzZGE3N2E0YiIsImlhdCI6MTc4NjkyNzY3MCwiZXhwIjoxNzg2OTMxMjcwfQ.Vw9ldLyUITUhmdU1KRsK5mCv-SLdgN4p2oWRzD81qF8"
    }
  });

  console.log(response);
  setNotes(prevNotes => prevNotes.concat(response.data));
  console.log("notes added");

}catch(err){
  console.log("Error ",err);
}

}
const deletenote=async(noteid)=>{

  console.log("Deleting note");
  // api call
  try{
  const response=await axios.delete(`${host}/api/notes/delete/${noteid}`, {
    headers: {
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzJmMjllMjJhZmNjZDUzZGE3N2E0YiIsImlhdCI6MTc4NjkyNzY3MCwiZXhwIjoxNzg2OTMxMjcwfQ.Vw9ldLyUITUhmdU1KRsK5mCv-SLdgN4p2oWRzD81qF8"
    }
  });

  console.log(response);
  const updatednotes=(prevnotes)=>{
   return  prevnotes.filter(note=>note._id!=noteid)

  };

  setNotes(updatednotes);
  console.log("Note deleted");

}catch(err){
  console.log("Error ",err);
}


}
const editnote=async(id, title, description,tag)=>{

   console.log("Editing the note");
   try{
  const response=await axios.post(`${host}/api/notes/updatenote/${id}`,
    {
    title,
    description,
    tag
  }, {
    headers: {
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzJmMjllMjJhZmNjZDUzZGE3N2E0YiIsImlhdCI6MTc4NjkyNzY3MCwiZXhwIjoxNzg2OTMxMjcwfQ.Vw9ldLyUITUhmdU1KRsK5mCv-SLdgN4p2oWRzD81qF8"
    }
  });

  console.log(response);
  console.log("Note updated");
}catch(err){
  console.log("Error ",err);
}
}
const fetchapi=async()=>{
   try{
  const response=await axios.get(`${host}/api/notes/fetchallnotes`,
    {
    headers: {
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNzJmMjllMjJhZmNjZDUzZGE3N2E0YiIsImlhdCI6MTc4NjkyNzY3MCwiZXhwIjoxNzg2OTMxMjcwfQ.Vw9ldLyUITUhmdU1KRsK5mCv-SLdgN4p2oWRzD81qF8"
    }
  });

  setNotes(response.data);
  console.log(response.data);
  console.log("Notes fetched");

}catch(err){
  console.log("Error ",err);
}
}


    return(
      // it tells whcich can access the data or function and which data 
        <NoteContext.Provider value={{addnote,deletenote,editnote,Notes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default Notestate;