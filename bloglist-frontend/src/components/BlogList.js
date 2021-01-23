import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, updateLikes, removeBlog }) => {
  blogs.sort((a, b) => a.likes - b.likes)
  return (
    blogs.map(blog =>
      <Blog key={blog.id} blog={blog} updateLikes={updateLikes} removeBlog={removeBlog}/>
    )
  )
}

export default BlogList