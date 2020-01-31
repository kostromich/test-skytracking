import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { closeModal } from '../../modules/global'

const Component = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.5
`

const ModalOverlay: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(closeModal())
  }

  return (
    <Component onClick={handleClick}/>
  )
}

export default ModalOverlay
