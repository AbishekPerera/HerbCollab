import React, { useState, useEffect } from "react";

import "./styles/Dashboard.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import axios from "axios";
import ViewSellerModal from "../../../components/System/Seller/ViewSellerModal";
import swal from "sweetalert";

const AllSellers = () => {
  const [SellerModal, setSellerModal] = useState(false);
  const [id, setID] = useState("");
  const [input, setInput] = useState({ Account: "" });
  const [statusChanged, setStatusChanged] = useState(false);
  const [search, setSearch] = useState("");

  const handleSellerModalClose = () => setSellerModal(false);
  const handleSellerModalShow = (id) => {
    setSellerModal(true);
    setID(id);
  };

  const [sellers, setSellers] = useState([]);

  const getSellers = async () => {
    try {
      const res = await axios
        .get("http://localhost:8084/users/")
        .then((res) => {
          const data = res.data;
          setSellers(data);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

  function DeleteSeller(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:8084/users/delete/" + id)
          .then((res) => {
            setSellers((sellers) => sellers.filter((_, i) => i !== id));
            window.location.reload(false);
          })
          .catch((err) => {
            swal(err);
          });
      } else {
        swal("Delete cancelled success!");
      }
    });
  }

  function handleChange(e, sellerData) {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setID(sellerData._id);
    setStatusChanged(true);
  }

  function Update() {
    console.log("Account", input.Account);
    console.log("ID", id);

    try {
      axios
        .put("http://localhost:8084/users/updateStatus/" + id, {
          Account: input.Account,
        })
        .then((res) => {
          const data = res.data;
          swal("Update Seller Status Successfully");
          window.location.reload(false);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (statusChanged) {
      Update();
      setStatusChanged(false); // reset the state variable
    }
  }, [statusChanged]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <ViewSellerModal
        show={SellerModal}
        handleClose={handleSellerModalClose}
        id={id}
      />
      <div className="mainContainer">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <div className="systemNavBar">
            <SystemNav />
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>All Sellers</h2>
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
            <form className="example" style={{ maxWidth: "300px" }}>
              <input
                type="text"
                placeholder="Search.."
                name="search2"
                onChange={handleSearch}
              />
            </form>
          </div>
          <br />
          {/* Table */}
          <div
            className="table-container"
            style={{ width: "98%", maxHeight: "500px", overflowY: "auto" }}
          >
            <table>
              <tr class="header-row">
                <th>Seller ID</th>
                <th>Seller Name</th>
                <th>Seller Store Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Registered Date</th>
                <th>Seller Status</th>
                <th>Action</th>
              </tr>
              {sellers &&
                sellers
                  .filter((sellerData) => {
                    if (sellerData.Role === "Seller") {
                      if (
                        sellerData.StoreName === search ||
                        sellerData.StoreName.toLowerCase().includes(
                          search.toLowerCase()
                        )
                      ) {
                        return sellerData;
                      } else if (
                        sellerData.UserName === search ||
                        sellerData.UserName.toLowerCase().includes(
                          search.toLowerCase()
                        )
                      ) {
                        return sellerData;
                      }
                    }
                  })
                  .map((sellerData, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{sellerData.UserName}</td>
                      <td>{sellerData.StoreName}</td>
                      <td>{sellerData.Email}</td>
                      <td>{sellerData.MobileNo}</td>
                      <td>{sellerData.Address}</td>
                      <td>{sellerData.RegisteredDate}</td>
                      <td>
                        <select
                          style={{ width: "180px" }}
                          name="Account"
                          value={sellerData.Account}
                          onChange={(e) => handleChange(e, sellerData)}
                        >
                          <option value={sellerData.Account} selected disabled>
                            {sellerData.Account}
                          </option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </td>
                      <td className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-success seller-modal-button"
                          style={{ marginRight: "10px" }}
                          onClick={() => handleSellerModalShow(sellerData._id)}
                        >
                          <span class="bi bi-eye"></span>
                        </button>
                        <button
                          className="btn btn-danger delete-seller-button"
                          onClick={() => DeleteSeller(sellerData._id)}
                        >
                          <span class="bi bi-trash"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
            </table>
          </div>
          <br /> <br /> <br />
          <SystemFooter />
        </div>
      </div>
    </>
  );
};

export default AllSellers;
