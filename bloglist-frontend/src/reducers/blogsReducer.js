const blogsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_BLOGS':
      return action.payload.blogs
    case 'CREATE_BLOG':
      return [...state, action.payload.newBlog]
    default:
      return state
  }
}

export default blogsReducer