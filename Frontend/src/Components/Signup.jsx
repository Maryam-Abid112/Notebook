import React from 'react'
import { useState } from 'react';
import axios from 'axios'



export default function () {
     const host = import.meta.env.VITE_API_URL;
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");
        const [name,setname]=useState("");
        const handleclick = async (e) => {
            console.log("Signup")
            e.preventDefault();
            try {
                const response = await axios.post(`${host}/api/auth/createuser`,
                    {
                        name,
                        email,
                        password
                    }, {
                    headers: {
                        "Content-Type": "application/json",
    
                    }
                });
                const responsedata = response.data;
                localStorage.setItem("token",responsedata.token)
    
    
            } catch (err) {
                console.log("Error:", err.response?.data);
            }
        }
    
    return (
        <>
            <div className='container'>
                <form onSubmit={handleclick}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={(e) => { setname(e.target.value) }} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={(e) => { setemail(e.target.value) }} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={(e) => { setpassword(e.target.value) }} required/>
                    </div>
                    <button disabled={email.length==0||name.length==0||password.length<5}type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div></>
    )
}
