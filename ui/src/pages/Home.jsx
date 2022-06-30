import React from "react";
import '../styles/Home.css'
import PostDisplay from '../components/PostDisplay.jsx'


const Home = () => {

    return (
      <div className='homepage-wrapper'>
        <PostDisplay />
      </div>
    )
}

export default Home