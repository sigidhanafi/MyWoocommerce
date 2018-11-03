import {
  STORE_DETAIL_REQUEST,
  STORE_DETAIL_REQUEST_SUCCESS,
  STORE_DETAIL_REQUEST_FAILED
} from '../actions/StoreDetailAction'

const initialStore = {
  data: [],
  isLoading: false,
  error: null
}

export const storeDetail = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_DETAIL_REQUEST:
      return { ...state, isLoading: true }
    case STORE_DETAIL_REQUEST_SUCCESS:
      return { ...state, data: action.data, isLoading: false }
    case STORE_DETAIL_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}
