import "./styles/Dashboard.css";
import "./styles/AdminProfile.css";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";

const AdminProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [ID, setID] = useState("");
  const [user, setUser] = useState({
    UserName: "",
    StoreName: "",
    Email: "",
    MobileNo: "",
    Address: "",
  });
  console.log(ID);

  //get data from local storage as a string
  const systemInfo = localStorage.getItem("systemInfo");
  //set data to local storage as a JSON object
  const systemInfo1 = JSON.parse(systemInfo);

  const id = systemInfo1["user"]["_id"];
  console.log(id);
  //then you can get any data from local storage. in this case i get user id adn log it on console
  console.log("local store", systemInfo1["user"]["_id"]);

  const sendRequest = async () => {
    try {
      const res = await axios
        .get("http://localhost:8084/users/user/" + id)
        .then((res) => {
          const data = res.data;
          setUser(data);
          setID(data._id);
        });
    } catch (err) {
      swal(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const handleInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
  const sendRequest2 = async () => {
    await axios
      .put("http://localhost:8084/users/update/" + ID, {
        UserName: user.UserName,
        StoreName: user.StoreName,
        Email: user.Email,
        MobileNo: user.MobileNo,
        Address: user.Address,
      })
      .then((res) => {
        swal("You have successfully updated.");
      })
      .catch((error) => {
        swal(error);
      });
  };

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SystemNav />
        </div>
        <div className="content " style={{ marginTop: "20px" }}>
          <div class="col-xl-12 ">
            <div class="card shadow">
              <div class="card-header  border-0">
                <h3 class="mb-0 text-center">My Profile</h3>
              </div>
              <div class="card-body text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <p class="text-muted font-size-sm">
                  Registered Date : {user.RegisteredDate}{" "}
                </p>
              </div>
              <div class="card-body">
                {isEditMode ? (
                  <form>
                    <h6 class="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <hr class="my-4" />
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group focused">
                            <label for="name" class=" profileformlabelName">
                              <i class="bi bi-person-circle profileicon"></i>
                              Admin Name:
                            </label>
                            <br />

                            <input
                              type="text"
                              class="form-control profileformtextareaName"
                              id="name"
                              name="UserName"
                              value={user.UserName}
                              onChange={handleInputChange}
                              required
                            />

                            <br />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group focused">
                            <label for="email" class=" profileformlabelName">
                              <i class="bi bi-envelope-at-fill profileicon"></i>
                              Email:
                            </label>
                            <br />

                            <input
                              type="email"
                              class="form-control profileformtextareaName"
                              id="email"
                              name="Email"
                              value={user.Email}
                              onChange={handleInputChange}
                              required
                            />

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h6 class="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <hr class="my-4" />
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="phone" class=" profileformlabelName">
                              <i class="bi bi-telephone-fill profileicon"></i>
                              Mobile:
                            </label>
                            <br />

                            <input
                              type="number"
                              class="form-control profileformtextareaName"
                              id="aphone"
                              name="MobileNo"
                              value={user.MobileNo}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <br></br>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="address" class=" profileformlabelName">
                              <i class="bi bi-geo-alt profileicon"></i>Address:
                            </label>
                            <br />

                            <input
                              type="text"
                              class="form-control profileformtextareaName"
                              id="address"
                              name="Address"
                              value={user.Address}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-4 " />

                    <div class="d-flex align-items-center justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success "
                        style={{ marginRight: "10px" }}
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                      <button class="btn btn-danger">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <form>
                    <h6 class="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <hr class="my-4" />
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group focused">
                            <label for="name">
                              <i class="bi bi-person-circle profileicon"></i>
                              Admin Name: {user.UserName}
                            </label>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group focused">
                            <label for="email">
                              <i class="bi bi-envelope-at-fill profileicon"></i>
                              Email: {user.Email}
                            </label>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>

                      <h6 class="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <hr class="my-4" />
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="phone">
                                <i class="bi bi-telephone-fill profileicon"></i>
                                Mobile: {user.MobileNo}
                              </label>
                              <br />
                            </div>
                          </div>
                        </div>
                        <br></br>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="address">
                                <i class="bi bi-geo-alt profileicon"></i>
                                Address: {user.Address}
                              </label>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="my-4 " />

                      <div class="d-flex align-items-center justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-success"
                          onClick={handleEditClick}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <SystemFooter />
      </div>
    </div>
  );
};
export default AdminProfile;
