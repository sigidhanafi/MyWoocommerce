import {
  STORE_PRODUCT_REQUEST,
  STORE_PRODUCT_REQUEST_SUCCESS,
  STORE_PRODUCT_REQUEST_FAILED
} from '../actions/StoreProductAction'

const initialStore = {
  data: [],
  isLoading: false,
  error: null
}

export const storeProduct = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_PRODUCT_REQUEST:
      return { ...state, isLoading: true }
    case STORE_PRODUCT_REQUEST_SUCCESS:
      return { ...state, data: action.data, isLoading: false }
    case STORE_PRODUCT_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state
  }
}
