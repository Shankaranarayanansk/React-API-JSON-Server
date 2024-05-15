import React, { useState } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => 
  {
  const navigate = useNavigate();
  const [id1, name] = useState("");
  const [id2, email] = useState("");
  const [id3, password] = useState("");
  const [id4, age] = useState("");
  const [id5, dob] = useState("");
  const [id6, role] = useState("");
  const [id7, skills] = useState("");

  const IsVa1idate = () => {
    let isproceed = true;
    let err="Please enter "

    if (id1 === "") {
      isproceed = false;
      err+= "email"
    }
    if (id2 === "") {
      isproceed = false;
      err+= "password"
    }
    if (id1 === "") {
      isproceed = false;
      err+= "age"
    }
    if (id1 === "") {
      isproceed = false;
      err+= "DOB"
    }
    if (id1 === "") {
      isproceed = false;
      err+= "Role"
    }
    if(!isproceed) {
      console.log(err)
      toast.warning(err);
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
   if(IsVa1idate()) {
    e.preventDefault()
    let regobj = { id1, id2, id3, id4, id5, id6, id7 };
    console.log(regobj);

    axios
      .post("http://localhost:3000/Students", regobj)
      .then((response) => {
        console.log(response);
        toast.success("Data Submitted")
        navigate('/login')
        // Navigate to the login page after successful submission
      })
      .catch((error) => {
        toast.error("Data Not Submitted");
        console.error("Error submitting data:", error);
      });
  };
}
  return (
    <div className="top">
      <div className="offset lg-3 col-lg-6">
        <div className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h3>Signup</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={id1}
                      onChange={(e) => {
                        name(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={id2}
                      onChange={(e) => {
                        email(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={id3}
                      onChange={(e) => {
                        password(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="age" className="col-sm-2 col-form-label">
                    Age
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Enter your age"
                      value={id4}
                      onChange={(e) => {
                        age(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="dob" className="col-sm-2 col-form-label">
                    DOB
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      placeholder="Enter your date of birth"
                      value={id5}
                      onChange={(e) => {
                        dob(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="role" className="col-sm-2 col-form-label">
                    Role
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      placeholder="Enter your role"
                      value={id6}
                      onChange={(e) => {
                        role(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="skills" className="col-sm-2 col-form-label">
                    Skills
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Enter your skills"
                      value={id7}
                      onChange={(e) => {
                        skills(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}


export default Signup;