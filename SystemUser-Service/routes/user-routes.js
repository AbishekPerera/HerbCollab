import express from 'express';
import users from '../models/Users.js';
import bcrypt from 'bcryptjs';

const router = express.Router();






//SignUp
router.route("/signup").post([

],async(req,res,next)=>{

    const {UserName,StoreName,Email,MobileNo,Address,Password}  = req.body;
    const hashPassword =await bcrypt.hash(Password, 10);
    console.log(Email);
    let existingUser, existingUserName;
  
    try{
        existingUser = await users.findOne({Email:Email});
        existingUserName = await users.findOne({UserName:UserName});
       
    }
    catch(err){
        console.log(err)
    }
    if(existingUserName){
        return res.status(406).json({message: "UserName already exists! Use another UserName"});
    }
    
    else if(existingUser){
        return res.status(406).json({message: "User already exists! Login Insted"});
    }



    const newUser= new users({
        UserName,
        StoreName,
        Email,
        MobileNo,
        Address,
        Password:hashPassword,
    });

    newUser.save().then(()=>{
        return res.status(200).json("Seller  added successfully");
        
      
       
    }).catch((err)=>{
        console.log(err);
    }) 

   
    
})

export default router;