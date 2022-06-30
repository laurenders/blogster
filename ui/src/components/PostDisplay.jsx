import React, { useContext } from 'react';
import { BlogContext } from '../App.js';
import PostCard from './PostCard.jsx';
import '../styles/PostDisplay.css'

// the list of post cards to display
const PostDisplay = () => {
  const bc = useContext(BlogContext)

  return (
    <div className='post-display'>
      {bc.postData.map(post => <PostCard post={post} key={post.title} />)}
    </div>
  )

}

export default PostDisplay;