import './App.css';
import { useState, useEffect, createContext } from 'react';
import PostCard from './components/PostCard.jsx';
import PostDisplay from './components/PostDisplay.jsx'
import Home from './pages/Home.jsx'
import PostDetails from './pages/PostDetails.jsx'
import Login from './pages/Login.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import CreatePost from './pages/CreatePost.jsx'
import MyPosts from './pages/MyPosts.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const BlogContext = createContext(null);

function App() {
  const [postData, setPostData] = useState([])
  const [user, setUser] = useState({})  // current user
  const [selected, setSelected] = useState({}) // current post 
  const [serverUrl] = useState(process.env.REACT_APP_SERVER_URL || 'http://localhost:3001') // this is for heroku deployment

  const refresh = () => {
    fetch(serverUrl+'/api/posts')
      .then(res => res.json())
      .then(data => {
        setPostData(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    refresh()
  }, [])


  const BlogContextVals = {
    postData, setPostData,
    user, setUser,
    selected, setSelected,
    refresh,
    serverUrl
  }

  console.log(`Currently logged in as ${user.username}`)

  return (
    <div className="App">
      <BlogContext.Provider value={BlogContextVals}>
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<CreateAccount />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/myposts' element={<MyPosts />} />
          </Routes>

        </Router>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
