import React, { useState } from 'react'
import "./Login.css"
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom"
import { Input } from "@mui/material"
import changePage from "../../changePage"

function Login() {

  changePage("Amazon Sign In")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();  // this stop is refresh

    if (email !== "" && password !== "") {
      auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
          // logged in redirect succesfully
          navigate("/")
        })
        .catch((err) => alert("Please create accaunt now"))
    }
    else {
      alert("Write a form")
    }
  }

  const register = (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          navigate("/")
        })
    }
    else {
      alert("Write a form")
    }
  }


  return (
    <div className='login'>
      <Link to="/">
        <img
          className='login__logo'
          src="https://harvestgroup.com/wp-content/themes/salient/img/amazon-logo.png" alt="login__logo" />
      </Link>
      <div className="login__container">
        <form>
          <div className="form__header">
            <h2> Sign in </h2>
            <div className="searchboxContainer">
              <label htmlFor="fmail"> Email </label>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                id='fmail'
                placeholder='enter your email'
              />
            </div>
            <div className="searchboxContainer">
              <label htmlFor="fpassword"> Password </label>
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                id='fpassword'
                placeholder='enter your password'
              />
            </div>
            <button
              onClick={signIn}
              className='signIn__button' type='submit'>
              Sign In
            </button>
            <p className='amazonLogin__title'>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
          </div>
          <p className='loginFooter__description'>
            Create Accaunt Now
          </p>
          <button
            onClick={register}
            className='signIn__btn'> Create Amazon Accaunt </button>
        </form>
      </div>
    </div>
  )
}

export default Login