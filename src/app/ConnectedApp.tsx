import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initApplication } from 'modules/global'
import InnerApp from 'app/InnerApp'

const ConnectedApp: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initApplication())
  }, [ dispatch ])

  return (
    <InnerApp />
  )
}

export default ConnectedApp
