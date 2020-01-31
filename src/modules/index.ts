import { combineReducers } from 'redux'
import global from './global'

const createRootReducer = () => combineReducers({
  global
})

export default createRootReducer
