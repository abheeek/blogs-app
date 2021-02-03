import blogService from '../services/blogs'
import { setNotification } from './notifActions'

export const getAllBlogs = () => async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'GET_ALL_BLOGS',
      payload: { blogs }
    })
  }

export const createBlog = (blog) => async dispatch => {
    try {
      const newBlog = await blogService.create(blog)
      dispatch({
        type: 'CREATE_BLOG',
        payload: { newBlog }
      })
    } catch(error) {
      dispatch(setNotification(error.response.data.error))
    }
  }


export const likeBlog = (blog) => async dispatch => {
    const updatedBlog = await blogService.updateLikes(blog)
    dispatch({
      type: 'LIKE_BLOG',
      payload: { updatedBlog }
    })
  }

export const deleteBlog = (id) => async dispatch => {
    try {
      await blogService.remove(id)
      dispatch({
        type: 'DELETE_BLOG',
        payload: { id }
      })
      dispatch(setNotification('Blog Deleted!'))
    } catch(error) {
      dispatch(setNotification(error.response.data.error))
    }
  }