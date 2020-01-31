import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from 'modules'
import history from 'ownHistory'

export default () => {
  return createStore(
    createRootReducer(),
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    )
  )
}
