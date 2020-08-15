import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState('')
  const history = useHistory()


  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  useEffect(() => {
    localStorage.getItem('bubbleToken') && history.push('/bubbles')
  })

  const handleSubmit = e => {
    e.preventDefault()
      axiosWithAuth().post('/login', credentials)
      .then(res => {
        setError('')
        localStorage.setItem('bubbleToken', res.data.payload)
        history.push('/bubbles')
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>

      <form>
        <label htmlFor='username' onSubmit={handleSubmit}>
          Username:
          <input type='text' placeholder='Username' name='username' value={credentials.username} onChange={handleChange} label='username' />  
        </label>  

        <label htmlFor='password' onSubmit={handleSubmit}>
          Password:
          <input type='text' placeholder='Password' name='password' value={credentials.password} onChange={handleChange} label='password' />
        </label>

        <button onClick={handleSubmit}>Login</button>
          {/* this is for the error message */}
        {error && <p style={{ color: 'red' }}>Sorry, this log in did not work</p>}
      </form>

    </div>
  );
};

export default Login;
