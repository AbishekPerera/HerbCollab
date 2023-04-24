import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from"../../components/CusProfileNavbar/CusProfileNavbar";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [image, setImage] = useState(false);
  const [text, setText] = useState('Enter the value');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
    setImage(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <><div>
      <Header />
      <div className="muprofile-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-myprofilepage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">My Profile</h1>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span class="ltn__secondary-color">
                            <i class="bi bi-house-fill"></i>
                          </span>
                          Home
                        </Link>
                      </li>
                      <li>MyProfile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}

      </div>

      {/* Navigation Bar Onwards*/}
      <div class="container-fluid">
        <div class="row">
          {/* Navigation Bar */}

          <CusProfileNavbar />


          <div class="col-xl-6 order-xl-1">
            <div class="card bg-white shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My Profile</h3>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <h6 class="heading-small text-muted mb-4">User information</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group focused" >
                          <label for="name" class=" profileformlabelName"><i class="bi bi-person-circle profileicon"></i>Name:</label><br/>
                         {isEditMode ? (
                            <input type="text" class="form-control profileformtextareaName" id="name" name="name" value={text} onChange={handleInputChange} required/>
                          ) : (
                            <div class="profileformlabelName" >{text}</div>
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
                          <input type="email" class="form-control profileformtextareaName" id="email" name="email" value={text} onChange={handleInputChange} required/>
                          ) : (
                            <div  class=" profileformlabelName" >{text}</div>
                          )}
                          <br/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <hr class="my-4"/>

                    <h6 class="heading-small text-muted mb-4">Contact information</h6>
                    <div class="pl-lg-4">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                        
                          <label for="phone" class=" profileformlabelName"><i class="bi bi-telephone-fill profileicon"></i>Mobile:</label><br/>
                          {isEditMode ? (
                          <input type="number" class="form-control profileformtextareaName" id="aphone" name="phone" value={text} onChange={handleInputChange} required/>
                          ) : (
                            <div  class=" profileformlabelName" >{text}</div>
                          )}
                        </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                          <label for="address" class=" profileformlabelName"><i class="bi bi-geo-alt profileicon"></i>Address:</label><br/>
                          {isEditMode ? (
                          <input type="text" class="form-control profileformtextareaName" id="address" name="address" value={text} onChange={handleInputChange}required/>
                          ) : (
                            <div  class=" profileformlabelName" >{text}</div>
                          )}
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <hr class="my-4" />
                    {isEditMode ? (
                        <button type="submit" class="btn btn-info" onClick={handleSaveClick}>Save</button>
                      ) : (
                        <button type="submit" class="btn btn-info" onClick={handleEditClick}>Edit</button>
                      )}
                    
                  </form>
              </div>
            </div>
          </div>
          <div class="col-xl-4 "  height="1000">
            <div class="card bg-white shadow">
            
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                  {isEditMode ? (
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="280"/>
                  ) : (
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="300"/>
                  )}
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Abhishek Pererea</p>
                      <p class="text-muted font-size-sm">abhi@gmail.com</p>
                      <p class="text-muted font-size-sm">Registerd Date : 2020/10/12</p>
                      
                    
                         
                      <form class="upload-form" method="POST" enctype="multipart/form-data" show={image}>
                        <div class="form-group">
                        {isEditMode ? (
                          
                          <input type="file" class="form-control" id="photo" name="photo"/>
                        ) : (<p></p>)}
                        </div>
                        {isEditMode ? (
                        <hr class="my-4"/>
                        ) : (<p></p>)}
                        
                        {isEditMode ? (
                        <button type="submit" class="btn btn-info">Upload</button>
                        ) : (<p></p>)}
                      </form>
                      
                    </div>
                  </div>
                </div>
           
                  
              
            </div>
          </div>

        </div>
      </div>
    </div><Footer /></>
    
  );
};

export default CustomerProfile;
