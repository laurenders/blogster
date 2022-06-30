import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    let user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }
    fetch(bc.serverUrl+'/api/users/login', request)
    .then(res => res.json())
    .then(data => {
      bc.refresh()
      alert(`Welcome back ${data.username}!`)
      bc.setUser(data)
      nav('/')
    })
    .catch(err => {
      console.log(err)
      alert(`Login failed`)
    })
  }
  

  return (
    <div className='login-wrapper' >
      <h2>Welcome back! Please sign in.</h2>
      <form onSubmit={e => submitHandler(e)}>
        <label>
          <p>Username</p>
          <input type="text" id='username' name='username' />
        </label>
        <label>
          <p>Password</p>
          <input type="password" id='password' name='password' />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>   
    </div>
  )

}

export default Login;