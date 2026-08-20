import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import NoteContext from "../context/notes/notecontext";



export default function () {
    const host = import.meta.env.VITE_API_URL;
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { setToken } = useContext(NoteContext);
    const navigate=useNavigate();
    const handleclick = async (e) => {
        console.log("Login")
        e.preventDefault();
        try {
            const response = await axios.post(`${host}/api/auth/login`,
                {
                    email,
                    password
                }, {
                headers: {
                    "Content-Type": "application/json",

                }
            });
            const responsedata = response.data;
            localStorage.setItem("token", responsedata.token);
            setToken(response.data.token);
            navigate("/Notes");
           
        } catch (err) {
            console.log("Error:", err.response?.data);
        }

        setemail("")
        setpassword("")
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleclick}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' value={email} aria-describedby="emailHelp" onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div></>
    )
}

