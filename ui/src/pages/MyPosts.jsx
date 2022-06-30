import '../styles/MyPosts.css'
import { BlogContext } from '../App.js'
import PostDisplay from '../components/PostDisplay.jsx'
import { useNavigate, Link } from 'react-router-dom'
import React, { useContext } from 'react';



const MyPosts = () => {
  
    return (
      <div className='my-posts-wrapper'>
        <PostDisplay />
      </div>
    )
}

export default MyPosts