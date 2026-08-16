import React from 'react'
import { useContext, useState } from 'react';
import NoteContext from '../context/notes/notecontext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

export default function Notes() {
     const a = useContext(NoteContext);
  const {notes} = a;
  return (
    <>
   
      <div className='row my-3'>
        <h2>My Notes</h2>
        {notes.map((note) => {
           return <Noteitem  key={note._id} note={note}/>

})}
      </div>
      </>
    
  )
}
