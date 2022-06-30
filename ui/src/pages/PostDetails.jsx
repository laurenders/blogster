import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/PostDetails.css'

const PostDetails = () => {
  const bc = useContext(BlogContext)

  console.log(bc.selected)

  return (
    <div className='post-details-wrapper' >
      <h3>
        {bc.selected.title}
      </h3>
      <span>Created on: {(new Date(bc.selected.created)).toLocaleDateString()}</span>
      <span>Author: {bc.selected.user_id}</span>
      <div className='content-wrapper'>
        {bc.selected.content}
      </div>
      
    </div>
  )

}

export default PostDetails;