import React, { useContext } from 'react';
import '../styles/Home.css'
import PostDisplay from '../components/PostDisplay.jsx'
import { BlogContext } from '../App.js'


const Home = () => {
  const bc = useContext(BlogContext)
  bc.setEditMode(false)

    return (
      <div className='homepage-wrapper'>
        <PostDisplay />
      </div>
    )
}

export default Home