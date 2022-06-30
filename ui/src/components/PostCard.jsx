import React, { useContext } from 'react';
import { BlogContext } from '../App.js'
import '../styles/PostCard.css'
import { useNavigate, Link } from 'react-router-dom'


// properties of PostCard are defined in PostDisplay component
// post card is a single blog post
const PostCard = (props) => {
  const bc = useContext(BlogContext)
  const nav = useNavigate()


  const clickHandler = () => {
    bc.setSelected(props.post)
  }

  return (
    <div className='post-card'>
      <h3>
        {props.post.title}
      </h3>
      <div className='post-content'>
        {props.post.content.length > 100 ? props.post.content.substring(0, 100)+'...' : props.post.content}
      </div>
      <Link to={`/posts/${props.post.id}`} onClick={clickHandler}>See More</Link>
    </div>
  )

}

export default PostCard;