import loginService from '../services/login'
import { setNotification } from './notifActions'

export const loginUser = (credentials) => async dispatch => {
    try {
      const user = await loginService.login(credentials)
      dispatch({
        type: 'LOGIN_USER',
        payload: { user }
      })
      dispatch(setNotification('logged in'))
    } catch(error) {
      dispatch(setNotification(error.response.data.error))
    }
  }