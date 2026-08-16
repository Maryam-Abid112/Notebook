import React, { useState } from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/notecontext';


export default function Addnote() {
 const a = useContext(NoteContext);
  const {addnote} = a;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [tag, settag] = useState("");
 const handleclick=(e)=>{
    e.preventDefault();
    addnote(title,description,tag);

  }


  return (
    <>
      <div className='container my-3'>
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={(e)=>{settitle(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" onChange={(e)=>{setdescription(e.target.value)}} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tags</label>
            <input type="text" className="form-control" id="tag" onChange={(e)=>{settag(e.target.value)}} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
        </form>

      </div>
     
    </>
  )
}
