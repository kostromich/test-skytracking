import React from 'react'
import styled from 'styled-components'
import useSelector from 'hooks/useSelector'
import PhotoListItem from './PhotoListItem'
import { getActivePhoto, getPhotos } from 'selectors'

const Component = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`

const PAGE_SIZE = 2000

const PhotosList: React.FC = () => {
  const photos = useSelector(state => getPhotos(0, PAGE_SIZE, state))
  const activePhoto = useSelector(getActivePhoto)

  return (
    <Component>
      {photos.map(photo => (
        <PhotoListItem
          photo={photo}
          key={photo.id}
          active={activePhoto && photo.id === activePhoto.id}
        />
      ))}
    </Component>
  )
}

export default PhotosList
