const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt= require('jsonwebtoken');




// post req for sending data to the server
router.post('/',
  // adding validation
  [
    body('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
    body('email', 'Please provide a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
  ], async (req, res) => {
    const secretKey ="maryam@123";
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    console.log(req.body)
    // used for creating a token for user authentification
    const token=jwt.sign({id:req.body.id},secretKey,{expiresIn:"1h"});

    
    // creating a salt for hashing password 
    const salt = await bcrypt.genSalt(10);
    // getting the password from request body 
    const pasword = await bcrypt.hash(req.body.password, salt);



    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: pasword
    });

    res.send(token)



  })
module.exports = router
