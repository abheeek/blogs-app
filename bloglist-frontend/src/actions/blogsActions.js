import blogService from '../services/blogs'

export const getAllBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'GET_ALL_BLOGS',
      payload: { blogs }
    })
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    const newBlog = await blogService.create(blog)
    dispatch({
      type: 'CREATE_BLOG',
      payload: { newBlog }
    })
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    const updatedBlog = await blogService.updateLikes(blog)
    dispatch({
      type: 'LIKE_BLOG',
      payload: { updatedBlog }
    })
  }
}