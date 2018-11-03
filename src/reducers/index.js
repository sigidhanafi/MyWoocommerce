import { combineReducers } from 'redux'
import { stores } from './StoreReducer'
import { storeDetail } from './StoreDetailReducer'
import { storeProduct } from './StoreProductReducer'
import { selectedProduct } from './SelectedProductReducer'

const appReducer = combineReducers({
  stores,
  storeDetail,
  storeProduct,
  selectedProduct
})

export default appReducer
