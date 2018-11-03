import {
  SELECT_PRODUCT_DONE,
  DESELECT_PRODUCT_DONE
} from '../actions/SelectedProductAction'

const initialStore = {
  data: []
}

export const selectedProduct = (state = initialStore, action) => {
  switch (action.type) {
    case SELECT_PRODUCT_DONE:
      return { data: action.data }
    case DESELECT_PRODUCT_DONE:
      return { data: action.data }
    default:
      return state
  }
}
