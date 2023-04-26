import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [image, setImage] = useState(false);
  const [text, setText] = useState("Enter the value");
  const [userInfo, setUserInfo] = useState([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const history = useNavigate();

  const handleEditClick = () => {
    setIsEditMode(true);
    setImage(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    updateProfile();
  };

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      history("/");
    }
    const userInfo = localStorage.getItem("userInfo");
    const user = JSON.parse(userInfo);
    // console.log(user.user);
    setUserInfo(user.user);
  }, []);

  const updateProfile = async () => {
    if (confirmPassword === password) {
      axios
        .put("http://localhost:8075/auth/update/" + userInfo._id, {
          name: name || userInfo.name,
          password: password || userInfo.password,
          phone: phone || userInfo.phone,
          address: address || userInfo.address,
        })
        .then((res) => {
          alert("Profile Updated Successfully");
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          history("/");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Password and Confirm Password does not match");
    }
  };

  return (
    <>
      <div>
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
                  <Form onSubmit={handleSaveClick}>
                    <h6 class="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label for="name" class=" profileformlabelName">
                              <i class="bi bi-person-circle profileicon"></i>
                              Name:
                            </label>
                            <br />
                            {isEditMode ? (
                              <input
                                type="text"
                                class="form-control profileformtextareaName"
                                id="name"
                                name="name"
                                defaultValue={userInfo.name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            ) : (
                              <div class="profileformlabelName">
                                {userInfo.name}
                              </div>
                            )}
                            <br />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            {isEditMode ? (
                              <p></p>
                            ) : (
                              <label for="name" class=" profileformlabelName">
                                <i class="bi bi-envelope-at-fill profileicon"></i>
                                Email:
                              </label>
                            )}
                            <br />
                            {isEditMode ? (
                              <>
                                <Row>
                                  <Col lg={6}>
                                    <label
                                      for="email"
                                      class=" profileformlabelName"
                                    >
                                      <i class="bi bi-envelope-at-fill profileicon"></i>
                                      Password :
                                    </label>
                                    <input
                                      type="password"
                                      class="form-control profileformtextareaName"
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                      required
                                    />
                                  </Col>
                                  <Col lg={6}>
                                    <label for="repassword" class="">
                                      <i class="bi bi-envelope-at-fill profileicon"></i>
                                      Re-Enter Password:
                                    </label>
                                    <input
                                      type="password"
                                      class="form-control profileformtextareaName"
                                      onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                      }
                                      required
                                    />
                                  </Col>
                                </Row>
                              </>
                            ) : (
                              <div class=" profileformlabelName">
                                {userInfo.email}
                              </div>
                            )}
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />

                    <h6 class="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div class="pl-lg-4">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="phone" class=" profileformlabelName">
                              <i class="bi bi-telephone-fill profileicon"></i>
                              Mobile:
                            </label>
                            <br />
                            {isEditMode ? (
                              <input
                                type="text"
                                class="form-control profileformtextareaName"
                                defaultValue={userInfo.phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            ) : (
                              <div class=" profileformlabelName">
                                {userInfo.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="address" class=" profileformlabelName">
                              <i class="bi bi-geo-alt profileicon"></i>Address:
                            </label>
                            <br />
                            {isEditMode ? (
                              <input
                                type="text"
                                class="form-control profileformtextareaName"
                                id="address"
                                name="address"
                                defaultValue={userInfo.address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                              />
                            ) : (
                              <div class=" profileformlabelName">
                                {userInfo.address}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />
                    {isEditMode ? (
                      <button type="submit" class="btn btn-info">
                        Save
                      </button>
                    ) : (
                      <button
                        type="submit"
                        class="btn btn-info"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </Form>
                </div>
              </div>
            </div>
            <div class="col-xl-4 " height="1000">
              <div class="card bg-white shadow">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    {isEditMode ? (
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="280"
                      />
                    ) : (
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="300"
                      />
                    )}
                    <div class="mt-3">
                      <h4>{userInfo.name}</h4>
                      <p class="text-secondary mb-1">{userInfo.name}</p>
                      <p class="text-muted font-size-sm">{userInfo.email}</p>
                      <p class="text-muted font-size-sm">
                        Registerd Date : {userInfo.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerProfile;
