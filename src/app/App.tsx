import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'
import ConnectedApp from './ConnectedApp'

const App: React.FC = () => {
  const [ store, setStore ] = useState<any>(null)

  useEffect(() => {
    setStore(createStore())
  }, [])

  if (!store) {
    return null
  }

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

export default App
