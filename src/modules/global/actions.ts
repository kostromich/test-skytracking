import { createAction } from '@reduxjs/toolkit'
import * as types from './types'
import { Photo } from 'types'

export const setIsInitialized = createAction<boolean>(types.SET_IS_INITIALIZED)
export const setPhotos = createAction<Photo[]>(types.SET_PHOTOS)
export const setActivePhoto = createAction<Photo | undefined>(types.SET_ACTIVE_PHOTO)
export const clearActivePhoto = setActivePhoto(undefined)
