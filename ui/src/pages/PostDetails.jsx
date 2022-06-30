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

  const editModeToggle = () => {
    bc.setEditMode(true)
  }

  // for submitting post edits
  const submitHandler = (e) => {
    e.preventDefault()
    let edits = {
      id: bc.selected.id,
      title: e.target.title.value,
      content: e.target.content.value
    }
    const request = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edits)
    } 
    fetch(bc.serverUrl+'/api/posts/', request)
      .then(res => res.json())
      .then(data => {
        bc.refresh()
        bc.setEditMode(false)
        nav('/myposts')
        alert('Post edited')
      })
      .catch(err => console.log(err))
  }

 
  return (
    bc.editMode === false ?

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
          {
            bc.selected.user_id === bc.user.id ?
            <button className='edit-button' onClick={editModeToggle}>Edit</button>
            :
            ''
          }
        </span>
        :
        ''
      }    
    </div>
    :
    <div className='post-details-wrapper'>
      <form onSubmit={submitHandler}>
        <h3>
          <input type='text' id='title' name='title' defaultValue={bc.selected.title} />
        </h3>
        <textarea type='text' id='content' name='content'defaultValue={bc.selected.content}/>
        <input type='submit' value='Submit Edits' />
      </form>
    </div>

  )

}

export default PostDetails;