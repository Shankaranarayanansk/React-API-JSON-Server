import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  const Proceed = (e) => {
    e.preventDefault();
    if (Validations()) {
      //login functionality
      // console.log(userName, userPassword);
      axios
      .get(`http://localhost:3000/Students/`+userName)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        toast.warning("login Failed"+error.message)
      })
    }
  };
  const Validations = () => {
    let isproceed = true;
    let err = "Please enter the ";
    if (userName === "") {
      isproceed = false;
      err += "username ";
      console.log(err);
    }
    if (userPassword === "") {
      isproceed = false;
      err += "password";
    }
    if (!isproceed) {
      toast.warning(err);
    }
    return isproceed;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={Proceed} className="card">
            <div className="card-header bg-primary text-white">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="username">
                  Username <span className="errmsg">*</span>
                </label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={userPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit
                </button>
                <Link className="btn btn-secondary btn-lg" to={"/signup"}>
                  New User?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
