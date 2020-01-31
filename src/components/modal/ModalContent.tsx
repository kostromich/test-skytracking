import React from 'react'
import styled from 'styled-components'
import { Photo } from 'types'

const Component = styled.div`
  flex: none;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
`

const Picture = styled.picture``

interface OwnProps {
  photo?: Photo
}

const ModalContent: React.FC<OwnProps> = ({ photo }) => {
  return (
    <Component>
      {photo
        ? <Picture>
            <source srcSet={photo.url}/>
            <img src={photo.url} alt={photo.title}/>
          </Picture>
        : 'Not found'
      }
    </Component>
  )
}

export default ModalContent
