import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName:{
        type:String,
        required: true,
        unique: true,
    },

    StoreName:{
        type:String,
        required: true
    },


    Email:{
        type:String,
        required: true,
        unique: true,
    },

    MobileNo:{
        type:Number,
        required: true,
        minlength: 10,
        unique: true,
    },

    Address:{
        type:String,
        required: true,
    },
    
    Password:{
        type:String,
        required: true,
        minlength: [6,'Password should be at least 6 characters'],
    },
    
    RegisteredDate:{
        type:Date,
        default:new Date()
      
    },

    Role:{  
        type:String,
        enum: ["Admin","Seller"],
        default: "Seller",
    },

    Account:{
        type:String,
        enum: ["Active","Inactive"],
		default: "Inactive",
    },
   
})

const User = mongoose.model('SystemUser',userSchema);

export default User;
