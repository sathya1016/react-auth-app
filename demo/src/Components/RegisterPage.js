import React, { useState, } from 'react'
import "./Register.css";
import { Outlet, Link } from "react-router-dom";
const Signup = () => {
  const [details, setDetails] = useState({ username: "", email: "", gender: "", number: "", password: "" });
  let { username, email, gender, number, password } = details

  let formSubmit = (e) => {
    e.preventDefault()
    console.log(details)
  }
  let handleChange =(e)=>{
    let {name,value}=e.target
    setDetails({...details,[name]:value})
  }

  return (
    <div className='signupParentDiv'>
     
      <form onSubmit={formSubmit} className='signupForm'>
        <h1 className='signupH1Tag'>Register</h1>
        <div className='signupTextfieldName'>
          <input type='name' placeholder='Enter your Username' autoFocus name='username' value={username}  onChange={handleChange}
          />
        </div>
        <div className='signupTextfieldEmail'>
          <input type='email' placeholder='Enter your email' name='email' value={email}  onChange={handleChange}
          />
        </div>
        <div className='signupRadioDiv'>
          <div className='signupMaleDiv'>
          <input type="radio" id="Male" value="Male" name="gender"  onChange={handleChange}/>
          <label for="Male">Male</label>
          </div>
          <div className='signupFemaleDiv'>
          <input type="radio" id="Female" value="Female" name="gender"  onChange={handleChange} />
          <label for="Female">Female</label>
          </div>
          
        </div>
        <div className='signupTextfieldTel'>
          <input type="tel"  placeholder='Enter your number' name='number' value={number}  onChange={handleChange}/>
        </div>
        <div className='signupTextfieldPassword'>
          <input type='password' placeholder='Enter your Password' name='password' value={password}  onChange={handleChange}/>
        </div>
        <div className="signupSubmitbutton">
          <button>Create Account</button>
          
        </div>
        <div className="signupSubmitbutton">
        <button><Link to="/login">Already Registered
        </Link></button>
        </div>
        
      </form>
    </div>
  )
}

export default Signup