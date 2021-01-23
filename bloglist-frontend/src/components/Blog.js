import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, updateLikes, removeBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Togglable showButtonLabel='show' hideButtonLabel='hide'>
        <div>
          {blog.url}<br/>
          likes {blog.likes} <button onClick={() => updateLikes(blog)}>like</button><br/>
          {blog.user.name}
          <button onClick={() => removeBlog(blog)}>remove</button>
        </div>
      </Togglable>  
    </div>
  )
}

export default Blog
