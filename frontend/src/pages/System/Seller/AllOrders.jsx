import React from 'react'
import "./styles/SellerDashboard.css";
import "./styles/AllOrders.css";
import "./styles/AllOrdersSearch.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import SellerSidebar from "../../../components/System/Sidebar/SellerSidebar";
import SellerNav from "../../../components/System/SystemNavBar/SellerNav";
import Product1 from "../../../img/Seller/AllOrdersImages/Product7.jpeg";
import Product2 from "../../../img/Seller/AllOrdersImages/Product9.jpeg";
import Product3 from "../../../img/Seller/AllOrdersImages/Product3FaceCream.jpeg";
import Product4 from "../../../img/Seller/AllOrdersImages/Product4Cream.jpeg";
import Product5 from "../../../img/Seller/AllOrdersImages/Product8.jpeg";


const AllOrders = () => {
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
                <h2>All Orders</h2>
        </div>

          <br/> 

          {/* Search Bar */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "20px"  }}>
                <form className="searchbody example1 example2 example3 example4" action="/action_page.php" style={{ maxWidth: "300px" }}>
                    <input type="text" placeholder="Search.." name="search2" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
          </div>
          <br/>  
           
          {/* Table */}
          
          <div className="table-container" style={{ width: '98%'}}>
          
                <table>
                    <tr class="header-row">
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Order Details</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td><img src={Product4} alt="Product Image" style={{ width: '100px', height: '120px' }} /></td>
                        <td>Facial Cream</td>
                        <td>100ml Bottle</td>
                        <td>1500.00</td>
                        <td>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Name:  Sam Perera</p>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Address:  No 12/Ragama</p>
                        </td>
                        <td>
                            <select style={{ width: '180px' }}>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={Product2} alt="Product Image" style={{ width: '100px', height: '120px' }} /></td>
                        <td>Body Spray</td>
                        <td>200ml Bottle</td>
                        <td>2500.00</td>
                        <td>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Name:  Sam Perera</p>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Address:  No 12/Ragama</p>
                        </td>
                        <td>
                            <select style={{ width: '180px' }}>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={Product3} alt="Product Image" style={{ width: '100px', height: '120px' }} /></td>
                        <td>Hand Clenser</td>
                        <td>100ml Bottle</td>
                        <td>4500.00</td>
                        <td>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Name:  Sam Perera</p>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Address:  No 12/Ragama</p>
                        </td>
                        <td>
                            <select style={{ width: '180px' }}>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={Product5} alt="Product Image" style={{ width: '100px', height: '120px' }} /></td>
                        <td>Amond oil</td>
                        <td>100ml Bottle</td>
                        <td>4000.00</td>
                        <td>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Name:  Sam Perera</p>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Address:  No 12/Ragama</p>
                        </td>
                        <td>
                            <select style={{ width: '180px' }}>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={Product1} alt="Product Image" style={{ width: '100px', height: '120px' }} /></td>
                        <td>Hair oil</td>
                        <td>100ml Bottle</td>
                        <td>3000.00</td>
                        <td>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Name:  Sam Perera</p>
                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Customer Address:  No 12/Ragama</p>
                        </td>
                        <td>
                            <select style={{ width: '180px' }}>
                                <option value="completed">Completed</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </td>
                    </tr>
                </table>
          </div>
            <br/> <br/>  <br/>      
             
            
                
            <SystemFooter />
            </div>
        </div>
    )
}
export default AllOrders 