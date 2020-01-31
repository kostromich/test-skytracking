import { push } from 'connected-react-router'
import * as actions from './actions'
import indexBy from 'ramda/es/indexBy'
import prop from 'ramda/es/prop'
import { State } from 'types'
import { getActivePhoto } from './selectors'

export const initApplication = () => async dispatch => {
  await dispatch(loadPhotos())
  dispatch(actions.setIsInitialized(true))
}

const loadPhotos = () => async dispatch => {
  const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'

  const response = await fetch(PHOTOS_URL)

  const photos = await response.json()

  const indexById = indexBy(prop('id'))

  const indexedPhotos = indexById(photos)

  dispatch(actions.setPhotos(indexedPhotos))
}

export const closeModal = () => async dispatch => dispatch(push('/'))

export const viewNextPhoto = (step: number) => async (dispatch, getState: () => State) => {
  const state = getState()

  const activePhoto = getActivePhoto(state)

  if (!activePhoto) {
    return
  }

  const { id } = activePhoto

  const nextId = id + step

  const photos = state.global.photos

  if (!(nextId in photos)) {
    return
  }

  dispatch(push(`/${nextId}`))
}
