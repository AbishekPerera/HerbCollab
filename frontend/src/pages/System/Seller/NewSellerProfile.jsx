import "./styles/SellerDashboard.css";
import "./styles/SellerProfile.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";

import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
axios.defaults.withCredentials=true;


const SellerProfile = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [user,setUser]=useState('');
    const [ID,setID]=useState('');
    const [inputs,setInputs] = useState({
        UserName: '',
        StoreName: '',
        Email: '',
        MobileNo: '',
        Address: '',
        Password:''  
        
    })  
    console.log(ID);

    const sendRequest = async()=>{
        try{
          
        const res =await axios.get("http://localhost:8084/users/user",{
              withCredentials: true,
          }).then((res)=>{
            const data =  res.data;
            setUser(data)
            setID(data._id);
        })
      }catch(err){ alert(err)};
            
      
    }


      useEffect(()=>{
        sendRequest()
      },[])
    
  
    const handleInputChange = (e) => {
      //Set input value on change
    function  handleChange(e){
    setInputs(prev=>({
        ...prev,[e.target.name]:e.target.value,    
    }))

}
    };
  
    const handleEditClick = () => {
      setIsEditMode(true);
    };
  
    const handleSaveClick = () => {
      setIsEditMode(false);
    };
return ( 
<div className="mainContainer">
      <div className="sidebar">
        <SellerSidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SellerNav />
        </div>
        <div className="content " style={{ marginTop: '20px'}} >
        <div class="col-xl-12 ">
            <div class="card bg-white shadow">
              <div class="card-header bg-white border-0">
                
                    <h3 class="mb-0 text-center">My Profile</h3>
            
              </div>
              <div class="card-body text-center" >
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="280"/>
              <p class="text-muted font-size-sm">Registerd Date : {user.RegisteredDate} </p>
              </div>
              <div class="card-body" >
              
                <form>
                  <h6 class="heading-small text-muted mb-4">User information</h6>
                  <hr class="my-4"/>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Seller Name:</label><br/>
                         {isEditMode ? (
                            <input type="text" class="form-control profileformtextareaName" id="name" name="name" value={user.UserName} onChange={handleInputChange} required/>
                          ) : (
                            <div>{user.UserName}</div>
                          )}
                          <br/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Store Name:</label><br/>
                         {isEditMode ? (
                            <input type="text" class="form-control profileformtextareaName" id="name" name="store name" value={user.StoreName} onChange={handleInputChange} required/>
                          ) : (
                            <div>{user.StoreName}</div>
                          )}
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="email" class=" profileformlabelName"><i class="bi bi-envelope-at-fill profileicon"></i>Email:</label><br/>
                          {isEditMode ? (
                          <input type="email" class="form-control profileformtextareaName" id="email" name="email" value={user.Email}  onChange={handleInputChange} required/>
                          ) : (
                            <div>{user.Email}</div>
                          )}
                          <br/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >   
                    {isEditMode ? (
                          
                          <input type="file" class="form-control" id="photo" name="photo"/>
                        ) : (<p></p>)}
                   <br/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  

                    <h6 class="heading-small text-muted mb-4">Contact information</h6>
                    <hr class="my-4"/>
                    <div class="pl-lg-4">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                        
                          <label for="phone" class=" profileformlabelName"><i class="bi bi-telephone-fill profileicon"></i>Mobile:</label><br/>
                          {isEditMode ? (
                          <input type="number" class="form-control profileformtextareaName" id="aphone" name="phone" value={user.MobileNo}  onChange={handleInputChange} required/>
                          ) : (
                            <div>{user.MobileNo}</div>
                          )}
                        </div>
                        </div>
                      </div>
                      <br></br>
                      <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                          <label for="address" class=" profileformlabelName"><i class="bi bi-geo-alt profileicon"></i>Address:</label><br/>
                          {isEditMode ? (
                          <input type="text" class="form-control profileformtextareaName" id="address" name="address" value={user.Address} onChange={handleInputChange}required/>
                          ) : (
                            <div>{user.Address}</div>
                          )}
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <hr class="my-4 " />

                    <div class="d-flex align-items-center justify-content-center">
                    {isEditMode ? (
                        <button type="submit" class="btn btn-success " onClick={handleSaveClick}>Save</button>
                      ) : (
                        <button type="submit" class="btn btn-success" onClick={handleEditClick}>Edit</button>
                      )}
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>

        <br/><br/><br/>
        <SystemFooter />
      </div>
    </div>
) 
}
export default SellerProfile