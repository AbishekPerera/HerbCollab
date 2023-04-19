import express from 'express';
import users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
const router = express.Router();

//login
async function login(req,res,next){

    const {Email,Password}  = req.body;

    let existingUser;

    try{
        existingUser = await users.findOne({Email:Email});
        
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "User not Found. SignUp Please"});
    }
    
    const result =  await bcrypt.compare(Password, existingUser.Password);
    //const result = users.findOne({Password:existingUser.Password});
    
     if (!result ) {
    
        return res.status(401).json({message: "Invalid Email/Password"});
    }

    else if(existingUser.Account !== 'Active'){
        return res.status(402).json({message: "Your account is not activate Yet"})
    }
    
    
        const token = jwt.sign({id:existingUser._id},process.env.JWT_SECREAT_KEY,{
            expiresIn:"7d"
        });
        res.cookie(String(existingUser._id),token,{
            path: '/',
           // expires: new Date(Date.now()+1000*30),
           expiresIn:"7d",
            httpOnly: true,
            sameSite: 'lax'
        });
        return res.status(200).json({message: "Successfully Loged In",user:existingUser,token});
        
   
};




//verify token
async function getUserDetails(req,res,next){


        const cookies = req.headers.cookie;
        const token = cookies.split('=')[1].split(';')[0];
       console.log(token);
        //const headers = req.headers["authorization"];
        //const token = headers.split("=")[1];
        //console.log("tok",token);
        
    if(!token){
        res.status(404).json({message:"No token found"})
    }
    console.log(token);
    jwt.verify(String(token), process.env.JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});;
        }
        //return res.status(400).json({message:"valid Token"});
        //console.log(user.id);
        req.id = user.id;
        console.log(user.id)
    });
    next();
};

async function refresh(req,res,next){
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1].split(';')[0];
    if(!prevToken) {
        return res.status(400).json({message:'No token Found'})
    }
    jwt.verify(String(token), process.env.JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});;
        }
        //return res.status(400).json({message:"valid Token"});
        //console.log(user.id);
        res.clearCookie('${user.id}');
        req.cookies['${user.id}'] = "";

        const token=jwt.sign({id: user.id}, process.env.JWT_SECREAT_KEY,{
            expireIn: "7d"
        });
        res.cookie(String(user._id),token,{
            path: '/',
           // expires: new Date(Date.now()+1000*30),
           expiresIn:"7d",
            httpOnly: true,
            sameSite: 'lax'
        });
        req.id = user.id;
        return res.status(200).json({message: "Successfully Loged In",user:existingUser,token})
        
    });
};

//get user details
async function getUserDetails(req,res,next){
    const userId = req.id;
    
    
       await users.findById(userId,"-Password").then((user)=>{
        
        return res.status(200).json(user)
       }
       ).catch((err)=>{
        return new Error(err)
    })

  
};

async function logout(req,res,next){
    const cookies = req.headers.cookie;
    const token = cookies.split('=')[1].split(';')[0];
    console.log(cookies);
    
        
    if(!token){
        res.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token), process.env.JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});
        }
        res.clearCookie(user.id)
        //req.cookies[user.id]=" "
        console.log(user.id);
        req.id = user.id;
        return res.status(200).json({message:"successfully logout"});
       
    });
   

   
};

export default router;