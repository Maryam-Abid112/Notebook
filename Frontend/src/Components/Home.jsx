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

     {/* Hero Section */}
      <section className="container py-5 mt-5">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-7">
            <h1 className="display-4 fw-bold">
              Your thoughts. <br />
              Organized beautifully.
            </h1>

            <p className="lead text-muted mt-4">
              Capture your ideas, organize your thoughts, and keep
              everything important in one simple place.
            </p>

            <div className="mt-4">
              <Link
                to="/signup"
                className="btn btn-primary btn-lg me-3"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn btn-outline-primary btn-lg"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="card shadow border-0">
              <div className="card-body p-4">

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">My Notes</h5>
                  <span>📝</span>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h6>Project Ideas</h6>
                    <p className="text-muted mb-0">
                      Build something useful and simple.
                    </p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h6>Today's Tasks</h6>
                    <p className="text-muted mb-0">
                      Finish the notes app frontend.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h6>Important</h6>
                    <p className="text-muted mb-0">
                      Don't forget your great ideas.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2>Everything you need for your notes</h2>
          <p className="text-muted">
            Simple, organized, and easy to use.
          </p>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body p-4">
                <h1>📝</h1>
                <h4>Create Notes</h4>
                <p className="text-muted">
                  Quickly save your ideas whenever inspiration strikes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body p-4">
                <h1>✏️</h1>
                <h4>Edit Anytime</h4>
                <p className="text-muted">
                  Update your notes whenever your ideas change.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body p-4">
                <h1>🔒</h1>
                <h4>Private & Secure</h4>
                <p className="text-muted">
                  Your notes are connected to your own account.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="container text-center py-5 mb-5">
        <h2>Start organizing your thoughts today.</h2>

        <p className="text-muted mt-3">
          Create an account and start writing your first note.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary btn-lg mt-3"
        >
          Create Account
        </Link>
      </section>
      
      
  </>
  )
}

