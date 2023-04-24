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
    
    const [ID,setID]=useState('');
    const [user,setUser] = useState({
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

        setUser(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))

    };
  
    const handleEditClick = () => {
      setIsEditMode((prev) => !prev);
    };
  
    const handleSaveClick = (e) => {
      setIsEditMode(false);
      e.preventDefault();
      //setFormErrors(validate(inputs));
      //setIsSubmit(true);
      sendRequest2();
    };

   
    
      //insert data
      const sendRequest2=async()=>{
     
      await axios.put("http://localhost:8084/users/update/"+{ID},{
          UserName:user.UserName,
          StoreName:user.StoreName,
          Email:user.Email,
          MobileNo:user.MobileNo,
          Address:user.Address,
         
          }).then(res=>{
          
            alert("You have successfully updated.")
            //history("/AllDrivers");
             
          }).catch(error => {
            alert(error);
             
          })
        }
  
       
  
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
              <p class="text-muted font-size-sm">Registered Date : {user.RegisteredDate} </p>
              </div>
              <div class="card-body" >
              {isEditMode ? (
                <form>
                  <h6 class="heading-small text-muted mb-4">User information</h6>
                  <hr class="my-4"/>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Seller Name:</label><br/>
                         
                            <input type="text" class="form-control profileformtextareaName" id="name" name="UserName" value={user.UserName} onChange={handleInputChange} required/>
                         
                          <br/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Store Name:</label><br/>
                         
                            <input type="text" class="form-control profileformtextareaName" id="name" name="StoreName" value={user.StoreName} onChange={handleInputChange} required/>
                          
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="email" class=" profileformlabelName"><i class="bi bi-envelope-at-fill profileicon"></i>Email:</label><br/>
                          
                          <input type="email" class="form-control profileformtextareaName" id="email" name="Email" value={user.Email}  onChange={handleInputChange} required/>
                          
                          <br/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >   
                   
                          
                          <input type="file" class="form-control" id="photo" name="photo"/>
                      
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
                        
                          <input type="number" class="form-control profileformtextareaName" id="aphone" name="MobileNo" value={user.MobileNo}  onChange={handleInputChange} required/>
                          
                        </div>
                        </div>
                      </div>
                      <br></br>
                      <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                          <label for="address" class=" profileformlabelName"><i class="bi bi-geo-alt profileicon"></i>Address:</label><br/>
                         
                          <input type="text" class="form-control profileformtextareaName" id="address" name="Address" value={user.Address} onChange={handleInputChange}required/>
                          
                         
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <hr class="my-4 " />

                    <div class="d-flex align-items-center justify-content-center">
                    
                        <button type="submit" class="btn btn-success " onClick={handleSaveClick}>Save</button>
                     
                    </div>
                  </form>
                       ) :(
                  <form>
                  <h6 class="heading-small text-muted mb-4">User information</h6>
                  <hr class="my-4"/>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Seller Name:</label><br/>
                         
                            <div>{user.UserName}</div>
                         
                          <br/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Store Name:</label><br/>
                         
                            <div>{user.StoreName}</div>
                         
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="email" class=" profileformlabelName"><i class="bi bi-envelope-at-fill profileicon"></i>Email:</label><br/>
                        
                            <div>{user.Email}</div>
                          
                          <br/>
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
                            <div>{user.MobileNo}</div>
                        
                        </div>
                        </div>
                      </div>
                      <br></br>
                      <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                          <label for="address" class=" profileformlabelName"><i class="bi bi-geo-alt profileicon"></i>Address:</label><br/>
                         
                         
                            <div>{user.Address}</div>
                          
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <hr class="my-4 " />

                    <div class="d-flex align-items-center justify-content-center">
                    
                       
                    
                        <button type="submit" class="btn btn-success" onClick={handleEditClick}>Edit</button>
                    
                    </div>
                    </div>
                  </form>
                        )};
                  
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