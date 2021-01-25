const notifReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.payload.notification
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export default notifReducer