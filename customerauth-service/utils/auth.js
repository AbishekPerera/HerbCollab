
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import customers from "../models/customer.js";


//login
export async function login(req,res,next){

    const {email,password}  = req.body;

    let existingUser;

    try{
        existingUser = await customers.findOne({email:email});
        
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "User not Found. SignUp Please"});
    }
    
    const result =  await bcrypt.compare(password, existingUser.password);
    //const result = customers.findOne({Password:existingUser.Password});
    
     if (!result ) {
    
        return res.status(401).json({message: "Invalid Email/Password"});
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
        return res.status(200).json({message: "Successfully Logged In",user:existingUser,token});
        
   
};




//verify token
/*export async function verifyToken(req,res,next){


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
        console.log("User ID :",user.id)
    });
    next();
};

//get user details
export async function getUserDetails(req,res,next){
    const userId = req.id;
    
    
       await customers.findById(userId,"-password").then((user)=>{
        
        return res.status(200).json(user)
       }
       ).catch((err)=>{
        return new Error(err)
    })

  
};*/

export async function logout(req,res,next){
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

