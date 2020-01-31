import { createReducer } from '@reduxjs/toolkit'
import { StateGlobalSection } from 'types'
import * as types from './types'

const initialState: StateGlobalSection = {
  isInitialized: false,
  photos: {},
  activePhoto: undefined
}

const globalReducer = createReducer(initialState, {
  [types.SET_IS_INITIALIZED]: (state, action) => {
    state.isInitialized = action.payload
  },
  [types.SET_PHOTOS]: (state, action) => {
    state.photos = action.payload
  },
  [types.SET_ACTIVE_PHOTO]: (state, action) => {
    state.activePhoto = action.payload
  }
})

export default globalReducer
