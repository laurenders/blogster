import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/PostDetails.css'
import { useNavigate } from 'react-router-dom';


const PostDetails = () => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()
  console.log(bc.selected)

  const deleteHandler = () => {
    const request = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bc.selected)
    } 
    fetch(bc.serverUrl+'/api/posts/', request)
      .then(res => res.json())
      .then(data => {
        bc.refresh()
        nav('/myposts')
        alert('Post deleted')
      })
      .catch(err => console.log(err))
  }

  

  
  return (
    <div className='post-details-wrapper' >
      <h3>
        {bc.selected.title}
      </h3>
      <span>Created on: {(new Date(bc.selected.created)).toLocaleDateString()}</span>
      <span>User ID: {bc.selected.user_id}</span>
      <div className='content-wrapper'>
        {bc.selected.content}
      </div>
      {
        bc.user.id !== undefined ?
        <span className='button-wrapper'>
          <button className='delete-button' onClick={deleteHandler}>Delete</button>
          <button className='edit-button' onClick={editHandler}>Edit</button>
        </span>
        :
        ''
      }
         
    </div>
  )

}

export default PostDetails;