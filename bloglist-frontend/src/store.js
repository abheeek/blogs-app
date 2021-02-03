import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notifReducer from './reducers/notifReducer'
import blogsReducer from './reducers/blogsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  notification: notifReducer,
  blogs: blogsReducer,
  user: usersReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store