const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');
const dotenv=require ('dotenv');
// reads the .env file and loads the variables into process .env 
dotenv.config();
const fetchuser=require('../middleware/fetchuser');



// post req for sending data to the server(creating a user)
router.post('/createuser',
  // adding validation
  [
    body('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
    body('email', 'Please provide a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
  ], async (req, res) => {
    const secretKey =process.env.secretKey;
    // validating the request body data 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    console.log(req.body)
    // used for creating a token for user authentification
   

    
    // creating a salt for hashing password 
    const salt = await bcrypt.genSalt(10);
    // getting the password from request body 
    const pasword = await bcrypt.hash(req.body.password, salt);


   // user creation using mongoose model
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: pasword
    });

     const token=jwt.sign({id:user._id},secretKey,{expiresIn:"1h"});
    // sending the token to the user
    res.json({token});



  })
   
 // authentification of user api/auth/login
 router.post('/login',[
   body('email', 'Please provide a valid email').isEmail(),
  body('password', 'Password must be provided').exists()],
  async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

  
    // deconstructing    
    const {email,password}=req.body;
    // getting secret key from the .env file
    const secretkey=process.env.secretkey;
    try{

    const user=await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"Please try to login with correct credentials"});
    }

    // comparing the password
    const passwordcheck =await bcrypt.compare(password,user.password);
    if(!passwordcheck){
      return res.status(400).json({error:"Please try to login with correct credentials"});
    }
    // creating a token for the user
    const token=jwt.sign({id:user.id},secretkey,{expiresIn:"1h"});

    res.send(token);
  }catch(err){
    console.error(err.message);
    res.status(500).send("Internal server error");
  }

  // getting the data of the user using the token 
  router.post('/getuser',fetchuser,async(req,res)=>{
    try{
     const userid=req.user.id;
     console.log(userid);
     const user= await User.findById(userid).select("-password");
   
     res.send(user);
  }catch(err){
       console.error(err.message);
    res.status(500).send("Internal server error");
  }
  })
   




 })





module.exports = router
