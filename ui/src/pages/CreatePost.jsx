import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/CreatePost.css'
import { useNavigate, Link } from 'react-router-dom'


const CreatePost = (props) => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()
  bc.setEditMode(false)

  const submitHandler = (e) => {
    let newPost = {
      user_id: bc.user.id,
      title: e.target.title.value,
      content: e.target.content.value
    }
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost)
    }
     fetch(bc.serverUrl+'/api/posts/', request)
      .then(res => res.json())
      .then(data => {
        bc.refresh()
        alert('Post successfully created!')
        nav('/')
    })
    .catch(err => {
      console.log(err)
      alert(`Could not add a new post`)
    })
    e.preventDefault()
  }

  return (
    <div className='create-post-wrapper' >
    <form onSubmit={e => submitHandler(e)}>
      <label>
        <p>Title:</p>
        <input type="text" id='title' name='title' />
      </label>
      <label>
        <p>Content:</p>
        <textarea type="text" id='content' name='content' />
      </label>
      <div>
        <button type="submit">Create Post</button>
      </div>
    </form>   
  </div>
  )

}

export default CreatePost;