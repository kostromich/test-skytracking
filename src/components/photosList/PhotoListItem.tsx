import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import LazyImage from './LazyImage'
import { Photo } from 'types'

const Component = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  margin: 5px;
  width: 150px;
  height: 150px;
  border: 2px solid ${props => props.active ? '#000' : '#ccc'};

  &:hover {
    cursor: pointer;
    border-color: #000;
  }
`

const StyledLazyImage = styled(LazyImage)`
  width: 150px;
  height: 100%;
`

interface OwnProps {
  photo: Photo
  active?: boolean
}

const PhotoListItem: React.FC<OwnProps> = ({
  photo,
  active = false
}) => {
  const history = useHistory()

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    history.push(`/${photo.id}`)
  }

  return (
    <Component onClick={handleClick} active={active}>
      <StyledLazyImage photo={photo} />
    </Component>
  )
}

export default PhotoListItem
