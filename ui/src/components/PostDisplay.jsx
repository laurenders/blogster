import React, { useContext } from 'react';
import { BlogContext } from '../App.js';
import PostCard from './PostCard.jsx';
import '../styles/PostDisplay.css'

// the list of post cards to display depending on which part of blog you're at
const PostDisplay = () => {
  const bc = useContext(BlogContext)
  const loc = window.location.href

  return (
    <div className='post-display'>
      {
        loc.includes('myposts') ?
        bc.postData.filter(post => post.user_id  === bc.user.id).map(post => <PostCard post={post} key={post.title} />)
        :
        bc.postData.map(post => <PostCard post={post} key={post.title} />)
      }
    </div>
  )

}

export default PostDisplay;