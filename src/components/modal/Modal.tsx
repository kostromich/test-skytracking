import React, { KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import useEventListener from '@use-it/event-listener'
import useSelector from 'hooks/useSelector'
import { closeModal, viewNextPhoto } from '../../modules/global'
import ModalOverlay from './ModalOverlay'
import ModalContent from './ModalContent'
import { getActivePhoto } from 'selectors'

const Component = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal: React.FC = () => {
  const dispatch = useDispatch()

  useEventListener<KeyboardEvent>('keydown', (e) => {
    if (e.key === 'Escape') {
      dispatch(closeModal())
      return
    }

    if (e.key === 'ArrowRight') {
      dispatch(viewNextPhoto(1))
      return
    }

    if (e.key === 'ArrowLeft') {
      dispatch(viewNextPhoto(-1))
      return
    }
  })

  const activePhoto = useSelector(getActivePhoto)

  return (
    <Component>
      <ModalOverlay />
      <ModalContent photo={activePhoto} />
    </Component>
  )
}

export default Modal
