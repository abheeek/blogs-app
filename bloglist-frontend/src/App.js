import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogList from './components/BlogList'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import { getAllBlogs } from './actions/blogsActions'

const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const notification = useSelector(state => state.notification)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllBlogs())  
  }, [dispatch])

  const loginForm = () => (
    <LoginForm />
  )

  const blogList = () => (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name} logged-in
        <button onClick={loginService.logout}>logout</button>
      </p>
      <BlogForm />
      <BlogList blogs={blogs} />
    </div>
  )

  return (
    <div>
      <h2>{notification}</h2>
      {user === null ?
        loginForm() :
        blogList() }
    </div>
  )
}

export default App