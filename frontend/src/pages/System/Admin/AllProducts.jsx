import React from "react";
import "./styles/Dashboard.css";
import "./styles/AllProducts.css";
import "./styles/AllProductsSearch.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import Product1 from "../../../img/Admin/Product7.jpeg";
import Product2 from "../../../img/Admin/Product6.jpeg";
import Product3 from "../../../img/Admin/Product3FaceCream.jpeg";
import Product4 from "../../../img/Admin/Product4Cream.jpeg";
import Product5 from "../../../img/Admin/Product8.jpeg";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";

const AllProducts = () => {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SystemNav />
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>All Products</h2>
        </div>
        <br />
        {/* Search Bar */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <form
            className="example"
            action="/action_page.php"
            style={{ maxWidth: "300px" }}
          >
            <input type="text" placeholder="Search.." name="search2" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <br />
        {/* Table */}
        <div className="table-container" style={{ width: '98%'}}>
          <table>
            <tr class="header-row">
              <th>Product</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Seller Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>
                <img
                  src={Product4}
                  alt="Product Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>Facial Cream</td>
              <td>100ml Bottle</td>
              <td>1500.00</td>
              <td>Seller name here</td>

              <td>
                <select style={{ width: "180px" }}>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Product2}
                  alt="Product Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>Body Spray</td>
              <td>200ml Bottle</td>
              <td>2500.00</td>
              <td>Seller name here</td>

              <td>
                <select style={{ width: "180px" }}>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Product3}
                  alt="Product Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>Hand Clenser</td>
              <td>100ml Bottle</td>
              <td>4500.00</td>
              <td>Sam Perera</td>

              <td>
                <select style={{ width: "180px" }}>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Product5}
                  alt="Product Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>Amond oil</td>
              <td>100ml Bottle</td>
              <td>4000.00</td>
              <td>Seller name here</td>
              <td>
                <select style={{ width: "180px" }}>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Product1}
                  alt="Product Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </td>
              <td>Hair oil</td>
              <td>100ml Bottle</td>
              <td>3000.00</td>
              <td>Seller name here</td>

              <td>
                <select style={{ width: "180px" }}>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <br /> <br /> <br />
        <SystemFooter />
      </div>
    </div>
  );
};
export default AllProducts;
