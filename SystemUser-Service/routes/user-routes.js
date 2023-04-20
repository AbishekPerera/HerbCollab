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

//display all users
router.route("/").get((req,res)=>{
    users.find().then((user)=>{
        return res.status(200).json(user)
    }).catch((err)=>{
        console.log(err)
    })
})

//single user
router.route("/user/:id").get(async(req,res)=>{

    const userId = req.params.id;
    const user = await users.findById(userId).then((user)=>{
        return res.status(200).json(user)
    }).catch((err)=>{
        return res.status(400).json(err)
    })

    
});

//update user
router.route("/update/:id").put(async(req,res)=>{
    const userId = req.params.id;
    console.log(userId)
    const {UserName,StoreName,Email,MobileNo,Address}  = req.body;

    const updateUser= {
        UserName,
        StoreName,
        Email,
        MobileNo,
        Address,
 
    }
    
    await users.findByIdAndUpdate(userId,updateUser,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"User updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with update user"});
    })  
})

//update user Account Status
router.route("/updateStatus/:id").put(async(req,res)=>{
    const userId = req.params.id;
    const{Account} = req.body;
    
    const update= {
       Account
    }
   await users.findByIdAndUpdate(userId,update,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"User Status updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with update status"});
    })  
 
})

//update Password
/*router.route("/updatePassword/").put(async(req,res)=>{
    
    const {Email,Password} = req.body;

    const result = users.findOne({Email:Email});

    if(result == "")
    {
        res.status(400).json({status:"Invalid Email"});
    }
    const hashPassword =await bcrypt.hash(Password, 10);

    const changePassword = {
        Password:hashPassword
    }
   await users.findByIdAndUpdate(result._id,changePassword,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Password Changed successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(401).json({status:"Error with change Password"});
    })  
})
*/
//delete User
router.route("/delete/:id").delete(async(req,res)=>{
    
    let userId = req.params.id;
    await users.findByIdAndDelete(userId).then(()=>{
        res.status(200).json({status:"User deleted successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with delete User"});
    })
})

export default router;