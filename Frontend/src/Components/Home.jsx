import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useContext, useState } from 'react';
import NoteContext from '../context/notes/notecontext';
import Notes from './Notes';
import Addnote from './Addnote';

export default function Home() {

  return (
    <>

     <Addnote />
      <div className='container my-3'>
             <Notes />
           </div>
      
  </>
  )
}

