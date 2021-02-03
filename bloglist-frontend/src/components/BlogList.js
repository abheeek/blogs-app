import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs }) => {
  blogs.sort((a, b) => a.likes - b.likes)
  return (
    blogs.map(blog =>
      <Blog key={blog.id} blog={blog} />
    )
  )
}

export default BlogList