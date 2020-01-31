import { Photo, State } from 'types'

export const getIsInitialized = (state: State): boolean =>
  state.global.isInitialized

const DEFAULT_PAGE_SIZE = 10

export const getPhotos = (from: number = 0, size: number = DEFAULT_PAGE_SIZE, state: State): Photo[] => {
  const photos = Object.values<Photo>(state.global.photos)

  if (from < 0) {
    from = 0
  }

  let to
  if (!size) {
    to = photos.length - from - DEFAULT_PAGE_SIZE
  } else {
    const maxPageSize = photos.length - from

    if (size > maxPageSize) {
      size = maxPageSize
    }

    to = from + size
  }

  return photos.slice(from, to)
}

export const getPhoto = (photoId: number, state: State): Photo | undefined =>
  state.global.photos[photoId]

export const getActivePhoto = (state: State): Photo | undefined =>
  state.global.activePhoto
