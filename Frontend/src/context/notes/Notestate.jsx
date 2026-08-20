import NoteContext from "./notecontext";
import react, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';




const Notestate=(props)=>{
  const host= import.meta.env.VITE_API_URL;
  const [Notes,setNotes]=useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

useEffect(() => {
  if (token) {
    fetchapi();
  } else {
    setNotes([]);
  }
}, [token]);

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
      "auth-token":token
    }
  });

  console.log("Addnote response"+response);
  setNotes(prevNotes => prevNotes.concat(response.data));
  

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
      "auth-token":token
    }});
    
  console.log(response);
  const updatednotes=(prevnotes)=>{
   return  prevnotes.filter(note=>note._id!=noteid)

  };

  setNotes(updatednotes);
 

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
      "auth-token":token
    }
  });

  setNotes(prevNotes =>
            prevNotes.map(note =>
                note._id === id ? response.data : note
            )
        );
  console.log(response);


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
      "auth-token":token
    }
  });

  setNotes(response.data);
 
  

}catch(err){
  console.log("Error ",err);
}
}


    return(
      // it tells whcich can access the data or function and which data 
        <NoteContext.Provider value={{addnote,deletenote,editnote,Notes,fetchapi,setToken}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default Notestate;