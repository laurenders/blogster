import '../styles/MyPosts.css'
import { BlogContext } from '../App.js'
import PostDisplay from '../components/PostDisplay.jsx'
import { useState, useEffect, useContext } from 'react';



const MyPosts = () => {
  const bc = useContext(BlogContext)
  bc.setEditMode(false)
  const [myPosts, setMyPosts] = useState([])

  useEffect(() => {
    setMyPosts(bc.postData.filter(post => post.user_id  === bc.user.id))
  }, [bc.postData])


  return (
    <div className='my-posts-wrapper'>
      {
      myPosts.length > 0 ?
      <PostDisplay posts={myPosts} />
      : 
      <h3>
        You don't have any posts :{'('}
      </h3>
      }
      
    </div>
  )
}

export default MyPosts