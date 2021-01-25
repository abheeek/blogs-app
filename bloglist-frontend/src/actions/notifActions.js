export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    payload: { notification }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}