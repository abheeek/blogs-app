import React from 'react'
import Togglable from './Togglable'
import { useDispatch } from 'react-redux'
import { likeBlog } from '../actions/blogsActions'

const Blog = ({ blog, removeBlog }) => {
  const dispatch = useDispatch()
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
          likes {blog.likes} <button onClick={() => dispatch(likeBlog(blog))}>like</button><br/>
          {blog.user.name}
          <button onClick={() => removeBlog(blog)}>remove</button>
        </div>
      </Togglable>  
    </div>
  )
}

export default Blog
