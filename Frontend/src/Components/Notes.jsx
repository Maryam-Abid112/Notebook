import React, { useRef } from 'react'
import { useContext, useState } from 'react';
import NoteContext from '../context/notes/notecontext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

export default function Notes() {
     const a = useContext(NoteContext);
     const [title,settitle]=useState("");
     const [description,setdescription]=useState("");
     const [tag,settag]=useState("");
  const {Notes,editnote} = a;
  const [note,setnote]=useState({});
  const ref=useRef(null);
  const Update=(note)=>{
    setnote(note)
    ref.current.click();
    
    
  }
  const handleclick=()=>{
    editnote(note._id,title,description,tag);
  }
  return (
    <>
     <Addnote/>
     <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden>
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={(e)=>{settitle(e.target.value)}} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" onChange={(e)=>{setdescription(e.target.value)}} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tags</label>
            <input type="text" className="form-control" id="tag" onChange={(e)=>{settag(e.target.value)}} />
          </div>
          
        </form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={title.length<5 || description.length<5} className="btn btn-primary" onClick={handleclick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
      <div className='row my-3'>
        <h2>My Notes</h2>
        <div className='container'>
          {Notes.length==0 ?'No notes to display':''}
        </div>
        {Notes.map((note) => {
           return <Noteitem  key={note._id} updatenote={Update}  note={note}/>

})}
      </div>
      </>
    
  )
}
