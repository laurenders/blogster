import '../styles/MyPosts.css'
import { BlogContext } from '../App.js'
import PostDisplay from '../components/PostDisplay.jsx'
import React, { useContext } from 'react';



const MyPosts = () => {
  const bc = useContext(BlogContext)
  bc.setEditMode(false)
  
    return (
      <div className='my-posts-wrapper'>
        <PostDisplay />
      </div>
    )
}

export default MyPosts