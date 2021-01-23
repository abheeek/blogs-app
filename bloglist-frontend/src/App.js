import React, { useState, useEffect, useRef } from 'react'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const update = async () => {
    const blogs = await blogService.getAll()
    setBlogs(blogs)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const notification = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  const addBlog = async (blogObject) => {
    try {
      blogFormRef.current.toggleVisibility()
      const returnedBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(returnedBlog))
    } catch (exception) {
      notification(exception.response.data.error)
    }
  }

  const updateLikes = async (blog) => {
    try {
      const returnedBlog = await blogService.updateLikes(blog)
      let index = blogs.findIndex(blog => blog.title === returnedBlog.title)
      let newBlogs = [...blogs]
      newBlogs[index] = {...returnedBlog}
      setBlogs(newBlogs)
    } catch (exception) {
      setMessage(exception.response.data.error)
    }
  }

  const removeBlog = async (blog) => {
    try {
      if (window.confirm(`Remove ${blog.title}?`)){
        await blogService.remove(blog)
        update()
      }
    } catch(exception) {
      setMessage(exception.response.data.error)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      notification('logged in')
    } catch (exception) {
      notification('Wrong credentials')
    }
  }

  const loginForm = () => (
    <LoginForm
      username={username}
      password={password}
      handleLogin={handleLogin}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange} />
  )

  const blogList = () => (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name} logged-in
        <button onClick={loginService.logout}>logout</button>
      </p>
      <Togglable showButtonLabel='create new' hideButtonLabel='cancel' ref={blogFormRef}>
        <BlogForm createBlog={addBlog} />
      </Togglable>
      <BlogList blogs={blogs} updateLikes={updateLikes} removeBlog={removeBlog}/>
    </div>
  )

  return (
    <div>
      <h2>{message}</h2>
      {user === null ?
        loginForm() :
        blogList() }
    </div>
  )
}

export default App