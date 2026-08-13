import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <div className='container my-3'>
      <h1>Add a note</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tags</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    <div>
      <h2>My Notes</h2>
    </div>
    </>
  )
}
