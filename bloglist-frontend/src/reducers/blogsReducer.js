const blogsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_BLOGS':
      return action.payload.blogs
    case 'CREATE_BLOG':
      return [...state, action.payload.newBlog]
    case 'LIKE_BLOG':
      const updatedBlog = action.payload.updatedBlog
      const newState = state.map(blog =>
        blog.id === updatedBlog.id
        ? updatedBlog
        : blog
      )
      return newState
    default:
      return state
  }
}

export default blogsReducer