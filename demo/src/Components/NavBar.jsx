import React  from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
const NavBar = () => {
  console.log(style)
  return (
    <div className={style.parentDiv}>
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

export default NavBar
