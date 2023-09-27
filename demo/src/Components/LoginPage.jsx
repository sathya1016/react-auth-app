import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({ email: "", password: "" });
  let { email, password } = state;
  const Submit = async e => {
    e.preventDefault();
    console.log("test");
    console.log(state);
    let get = await axios.get("http://localhost:5000/jwt");
    console.log(get.data);
    let eData = get.data.map(email => {
      if (state.email === email.email) {
        navigate("/");
      } else {
        alert("no user");
        navigate("/Register");
      }
    });
  };
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <div>
          <input
            type="email"
            value={email}
            name="email"
            autoFocus
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
      <div>
        <button>Not Registered </button>
      </div>
    </div>
  );
};

export default LoginPage;
