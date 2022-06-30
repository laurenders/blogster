import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { BlogContext } from '../App.js'
import React, { useContext } from 'react';

const Header = () => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()

  return (
    <div className='header'>
      <Link className='blogster-link' to='/'>Blogster</Link>
      <span>
        <button className='nav-button' onClick={() => nav('/login')}>Login</button> 
        <button className='nav-button' onClick={() => nav('/signup')}>Sign Up</button> 
        <button className='nav-button' onClick={() => nav('/createpost')}>New Post</button> 
      </span>
    </div>
  )
}

export default Header;