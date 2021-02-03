import blogService from '../services/blogs'

const storedUser = localStorage.getItem('storedUser')

const intitialState = JSON.parse(storedUser)

const usersReducer = (state=intitialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('storedUser', JSON.stringify(action.payload.user))
      blogService.setToken(action.payload.user.token)
      return { 
        ...state,
        user: action.payload.user
      }
    case 'LOGOUT_USER':
      localStorage.clear()
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

export default usersReducer