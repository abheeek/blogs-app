import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({ title, author, url })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        title: <input type="text" value={title} onChange={handleTitleChange} /><br/>
        author: <input type="text" value={author} onChange={handleAuthorChange} /><br/>
        url: <input type="text" value={url} onChange={handleUrlChange} />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm