import React from 'react'
import Togglable from './Togglable'
import { useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../actions/blogsActions'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const removeBlog = async blog => {
    if (window.confirm(`Remove blog ${blog.title}?`)) {
      dispatch(deleteBlog(blog.id))
    }
  }

  const updateLikes = blog => {
    dispatch(likeBlog(blog))
  }
  
  return (
    <div style={blogStyle}>
      {blog.title} {blog.user.name}
      <Togglable showButtonLabel='show' hideButtonLabel='hide'>
        <button onClick={() => updateLikes(blog)}>
          {blog.likes} likes
        </button>
        <button onClick={() => removeBlog(blog)}>
          remove
        </button>  
      </Togglable>  
    </div>
  )
}

export default Blog
