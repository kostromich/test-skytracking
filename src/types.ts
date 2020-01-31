export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type PhotosCollection = Record<string, Photo>

export interface StateGlobalSection {
  isInitialized: boolean
  photos: PhotosCollection
  activePhoto?: Photo
}

export interface State {
  global: StateGlobalSection
}
