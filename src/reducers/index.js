import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Home from './Home'

export default combineReducers({
  routing: routerReducer,
	Home
})