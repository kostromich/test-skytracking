import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { State } from 'types'

const useSelector: TypedUseSelectorHook<State> = useReduxSelector

export default useSelector
