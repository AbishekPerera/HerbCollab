import React from 'react'
import "./styles/Dashboard.css";
import "./styles/AllUsers.css";
import "./styles/AllUsersSearch.css";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import Sidebar from "../../../components/System/Sidebar/Sidebar";

const AllUsers = () => {
    return (
        <div className="mainContainer">
          <div className="sidebar">
            <Sidebar />
          </div>
    
          <div className="contentContainer">

          <div className="systemNavBar">
              <SystemNav />
          </div>

          <div style={{ textAlign: "left", marginLeft: "500px"}}>
             <h2>All Users</h2>
          </div>
          <br/> 

          {/* Search Bar */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="search-form__example" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "20px"  }}>
                <form className="searchbody example1 example2 example3 example4" action="/action_page.php" style={{ maxWidth: "300px" }}>
                    <input type="text" placeholder="Search.." name="search2" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
          </div>
          <br/>  
           
          {/* Table */}
          <div className="table-container" style={{ width: '98%'}}>
          
                <table>
                    <tr>
                        <th>Name</th>
                        <th>User Type</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>Peter White</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td style={{ fontWeight: 'bold', color: '#2c831e' }}>Admin</td>
                        <td>Colombo</td>
                        <td>0778558989</td>
                        <td>peter@gmail.com</td>
                    </tr>
                </table>
          </div>
            <br/> <br/>  <br/> <br/>     
            <br/> <br/>  <br/> <br/>  
            
                
            <SystemFooter />
            </div>
        </div>
    )
}
export default AllUsers    