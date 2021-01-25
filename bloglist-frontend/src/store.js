import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notifReducer from './reducers/notifReducer'
import blogsReducer from './reducers/blogsReducer'

const reducer = combineReducers({
  notification: notifReducer,
  blogs: blogsReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store