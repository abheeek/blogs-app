import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { createBlog } from '../actions/blogsActions'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const blogFormRef = useRef()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleCreateBlog = (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    dispatch(createBlog({ title, author, url }))
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <Togglable showButtonLabel='create' hideButtonLabel='hide' ref={blogFormRef}>
      <h2>create new</h2>
      <form onSubmit={handleCreateBlog}>
        title: <input type="text" value={title} onChange={handleTitleChange} /><br/>
        author: <input type="text" value={author} onChange={handleAuthorChange} /><br/>
        url: <input type="text" value={url} onChange={handleUrlChange} />
        <button type="submit">create</button>
      </form>
    </Togglable>
  )
}

export default BlogForm