import React from 'react'
import "./styles/Dashboard.css";
import "./styles/AdminProfile.css";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import AdminProfilePic from "../../../img/Admin/AdminProfile2.jpg";

const AdminProfile = () => {
return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        
      <div className="systemNavBar">
          <SystemNav />
      </div>
      
      
        <br/>
        <div className="containerx">
            
            <div style={{ textAlign: 'center' }}>
                <h2>My Profile</h2>
                <br/>
                <img src={AdminProfilePic} alt="My Profile Image" width="160" height="160" />
            </div>
            <br/>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="name" name="name" placeholder="Name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="nic">NIC Number</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="nic" name="nic" placeholder="NIC" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="mobile" name="mobile" placeholder="Mobile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="nic">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <br/>
                <div className="row"><br/>
                <input type="submit" id="editProfileBtn" value="Edit Profile" className="half-size"/>
                </div>
            </form>
        </div>
        <br/>
       
       
        <SystemFooter />
      </div>
    </div> 
)
}
export default AdminProfile