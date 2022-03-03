const express = require("express");
const router = express.Router();

const Signup = require("../Models/signup")

router.post('/signup',async(req,res)=>{
    try {
        
    const user = await Signup.create(req.body);
    res.status(201).json({Status: user});
    } catch (error) {
        res.status(500).json({Error: error.message});
    }
})
router.post('/login',async(req,res)=>{
    try {
    const user = await Signup.find({email: req.body.email,password: req.body.password});
    if(user.length===0){
        console.log("User not found");

     return   res.send(404);
    }
    res.status(200).json({Status: user});
    } catch (error) {
      return  res.status(500).json({Error: error.message});
    }
})
router.get('/user',async(req,res)=>{
    try {
        
    const user = await Signup.find();
    res.status(201).json({Status: user});
    } catch (error) {
        res.status(500).json({Error: error.message});
    }
})



module.exports = router;