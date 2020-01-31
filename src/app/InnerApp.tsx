import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import useSelector from 'hooks/useSelector'
import HomePage from 'pages/home/HomePage'
import { getIsInitialized } from 'selectors'

const InnerApp: React.FC = () => {
  const isInitialized = useSelector(getIsInitialized)

  if (!isInitialized) {
    return null
  }

  return (
    <Router>
      <Switch>
        <Route
          path='/:photoId?'
          component={HomePage}
        />
      </Switch>
    </Router>
  )
}

export default InnerApp
