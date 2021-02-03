export const setNotification = (notification) => dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      payload: { notification }
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, 5000)
  }