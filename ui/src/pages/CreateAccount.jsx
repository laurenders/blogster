import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/CreateAccount.css'
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    let newUser = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value
    }
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    }
    fetch(bc.serverUrl+'/api/users/', request)
    .then(res => res.json())
    .then(data => {
      bc.refresh()
      alert(`Account creation successful for ${data.username}!`)
      bc.setUser(data)
      nav('/myposts')
    })
    .catch(err => {
      console.log(err)
      alert(`Failed to add user: ${e.target.username.value}`)
    })
  }

  return (
    <div className='create-acct-wrapper' >
      <h2>Create an account here</h2>
      <form onSubmit={e => submitHandler(e)}>
        <label>
          <p>First Name</p>
          <input type="text" id='firstname' name='firstname' />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" id='lastname' name='lastname' />
        </label>
        <label>
          <p>Username</p>
          <input type="text" id='username' name='username' />
        </label>
        <label>
          <p>Password</p>
          <input type="password" id='password' name='password' />
        </label>
        <div>
          <button type="submit" className='submit'>Create Account</button>
        </div>
      </form>   
    </div>
  )
}


export default CreateAccount