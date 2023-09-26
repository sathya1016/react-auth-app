import React from 'react'
import { Outlet, Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login ">Login</Link>
      </li>
    <li>
      <Link to="/">About Us</Link>
    </li>
    </div>

  )
}

export default HomePage