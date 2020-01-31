import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import useSelector from 'hooks/useSelector'
import PhotosList from 'components/photosList/PhotosList'
import Modal from 'components/modal/Modal'
import { setActivePhoto } from 'modules/global'
import { getPhoto } from 'selectors'

const HomePage: React.FC = () => {
  const dispatch = useDispatch()

  const { photoId } = useParams()
  const photo = useSelector(state => getPhoto(photoId, state))

  useEffect(() => {
    if (photoId && photo) {
      dispatch(setActivePhoto(photo))
    }
  }, [ photoId ])

  return (
    <div>
      <PhotosList />
      {photoId &&
        <Modal />
      }
    </div>
  )
}

export default HomePage
