import {
  STORE_REQUEST,
  STORE_REQUEST_SUCCESS,
  STORE_REQUEST_FAILED
} from '../actions/StoreAction'

const initialStore = {
  data: [],
  isLoading: false,
  error: null
}

export const stores = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_REQUEST:
      return { ...state, isLoading: true }
    case STORE_REQUEST_SUCCESS:
      return { ...state, data: action.data, isLoading: false }
    case STORE_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}
