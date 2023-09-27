import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import * as yup from "yup";

//Singup component starts
const Signup = () => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    gender: "",
    number: "",
    password: "",
  });
  // destructing the object into a variable
  let { username, email, gender, number, password } = details;

  // function for the getting the data from input tag into the setState().
  let handleChange = e => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  //creating the schema of form validations using yup library.
  const userSchema = yup.object().shape({
    username: yup.string().required("username is invalid"),
    email: yup.string().email().required("email is invalid"),

    number: yup.number().required("number is invalid"),
    password: yup.string().min(8).required("password is invalid"),
  });

  // creating a form data object
  async function validateForm() {
    let dataObject = {
      username: username,
      email: email,
      gender: gender,
      number: number,
      password: password,
    };

    // validating this dataObject concerning Yup userSchema
    // axios post method is used to send the data to backend.
    const isValid = await userSchema.isValid(dataObject);
    if (isValid) {
      alert("Form is Valid");
      let postData = axios
        .post("http://localhost:5000/jwt", details)
        .then(function (x) {
          alert("data is send");
        });
    } else {
      alert("Form is Invalid");
    }
  }

  // function for submit the data {formSubmit}.
  let formSubmit = e => {
    e.preventDefault();
    validateForm();
    setDetails({
      username: "",
      email: "",
      gender: "",
      number: "",
      password: "",
    });
  };

  return (
    <div className="signupParentDiv">
      <form className="signupForm">
        <h1 className="signupH1Tag">Register</h1>
        <div className="signupTextfieldName">
          <input
            type="name"
            required
            placeholder="Enter your Username"
            autoFocus
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="signupTextfieldEmail">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="signupRadioDiv">
          <div className="signupMaleDiv">
            <input
              type="radio"
              id="Male"
              value="Male"
              name="gender"
              onChange={handleChange}
            />
            <label for="Male">Male</label>
          </div>
          <div className="signupFemaleDiv">
            <input
              type="radio"
              id="Female"
              value="Female"
              name="gender"
              onChange={handleChange}
            />
            <label for="Female">Female</label>
          </div>
        </div>
        <div className="signupTextfieldTel">
          <input
            type="tel"
            placeholder="Enter your number"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div className="signupTextfieldPassword">
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="signupSubmitbutton">
          <button onClick={formSubmit}>Create Account</button>
        </div>
        <div className="signupSubmitbutton">
          <button>
            <Link to="/login">Already Registered</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
