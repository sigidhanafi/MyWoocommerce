import { STORE_REQUEST_SUCCESS } from '../actions/StoreAction'

const initialStore = {
  data: [],
  isLoading: false
}

export const stores = (state = initialStore, action) => {
  switch (action.type) {
    case STORE_REQUEST_SUCCESS:
      return { ...state, data: action.data }
    default:
      return state
  }
}
