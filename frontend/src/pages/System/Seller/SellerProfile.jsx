import React from 'react'
import "./styles/SellerDashboard.css";
import "./styles/SellerProfile.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import SellerProfilePic from "../../../img/Seller/SellerProfile3.jpeg";


const SellerProfile = () => {
return ( 
<div className="mainContainer">
      <div className="sidebar">
        <SellerSidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SellerNav />
        </div>

        <div style={{ textAlign: 'center' }}>
                <h2>My Profile</h2>
        </div>

        <div className="containerx">
            
            <div style={{ textAlign: 'center' }}>
                {/* <h2>My Profile</h2> */}
                <br/>
                <img src={SellerProfilePic} alt="My Profile Image" width="170" height="180" />
            </div>
            <br/>
            <form action="/action_page.php">
                <div className="row seller">
                    <div className="col-25">
                        <label className="label2 seller"htmlFor="name">Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="name" name="name" placeholder="Name" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label className="label2 seller" htmlFor="name">Store Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="name" name="name" placeholder="Name" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-25">
                        <label className="label2 seller" htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="email" name="email" placeholder="Email" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label className="label2 seller" htmlFor="address">Address</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="address" name="address" placeholder="NIC" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label className="label2 seller" htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="mobile" name="mobile" placeholder="Mobile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="label2 seller" htmlFor="nic">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="input1 seller" id="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <br/>
                <div className="row"><br/>
                <input type="submit" className="input2 input3 half-size" id="editProfileBtn" value="Edit Profile"/>
                </div>
            </form>
        </div>
        <br/><br/><br/>
        <SystemFooter />
      </div>
    </div>
) 
}
export default SellerProfile