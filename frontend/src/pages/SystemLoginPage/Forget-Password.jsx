import "./Forget-Password.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import swal from "sweetalert";

const ForgetPassword = () => {
  const [inputs, setInputs] = useState({
    Email: "",
    Password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  }

  const sendData = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };

  const sendRequest = async () => {
    await axios
      .put("http://localhost:8084/users/updatePassword/", {
        Email: inputs.Email,
        Password: inputs.Password,
      })
      .then((res) => {
        swal("You have successfully Update your Password.");
        window.location.href = "/system/auth";
      })
      .catch((error) => {
        if (error.response.status === 400) {
          swal("Invalid Email");
        } else if (error.response.status === 401) {
          swal("Error with Change Password");
        } else {
          swal(error);
        }
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendRequest();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Invalid email address";
    }
    if (!values.Password) {
      errors.Password = "Password is required";
    } else if (values.Password.length <= 6) {
      errors.Password = "Password should contain more than 6 chracters.";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/i.test(values.Password)
    ) {
      errors.Password =
        "Password should contain at least one numeric digit and a special character";
    }

    return errors;
  };

  return (
    <>
      <Header />
      <div class="row justify-content-center wrapper" id="forgot-box">
        <div class="col-lg-10 my-auto myShadow">
          <div class="row">
            <div class="col-lg-7 bg-white p-4">
              <h1 class="text-center font-weight-bold text-primary">
                Forgot Your Password?
              </h1>
              <hr class="my-3" />
              <p class="lead text-center text-secondary">
                To reset your password, enter the registered e-mail adddress and
                we will send you password reset instructions on your e-mail!
              </p>
              <form onSubmit={sendData} className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <input
                  type="name"
                  className="input-field"
                  placeholder="Email"
                  name="Email"
                  value={inputs.Email}
                  onChange={handleChange}
                />
                <p class="error" name="Email" Value={formErrors.Email}>
                  {formErrors.Email}
                </p>
                <input
                  type="password"
                  className="input-field"
                  placeholder="New Password"
                  name="Password"
                  value={inputs.Password}
                  onChange={handleChange}
                />
                <p class="error" name="Passowrd" Value={formErrors.Password}>
                  {formErrors.Password}
                </p>

                <input
                  type="submit"
                  value="Change"
                  id="btnLogin"
                  className="btnLogin solid"
                />
              </form>
            </div>
            <div class="col-lg-5 d-flex flex-column justify-content-center myColor p-4">
              <h1 class="text-center font-weight-bold text-white">
                Reset Password!
              </h1>
              <hr class="my-4 bg-light myHr" />
              <Link
                to="/system/auth"
                class="btn btn-outline-light btn-lg font-weight-bolder myLinkBtn align-self-center"
                id="back-link"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ForgetPassword;
