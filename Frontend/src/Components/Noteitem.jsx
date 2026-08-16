import React from 'react'
import { useContext, useState } from 'react';
import NoteContext from '../context/notes/notecontext';


export default function Noteitem(props) {
    const { note } = props;
     const a = useContext(NoteContext);
  const {deletenote,editnote} = a;
  const del=(id)=>{
     deletenote(id);
  }


    return (
        <>
            <div className='col-md-3'>
                <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.Description}</p>
                        <p className="card-text">{note.tags}</p>
                        <button className="btn btn-primary " >Update</button>
                        <button className="btn btn-danger m-3"onClick={()=>del(note._id)}>Delete</button>

                    </div>
                </div>
            </div>
        </>
    )
}
