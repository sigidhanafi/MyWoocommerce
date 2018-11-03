import { combineReducers } from 'redux'
import { stores } from './StoreReducer'
import { storeDetail } from './StoreDetailReducer'
import { storeProduct } from './StoreProductReducer'

const appReducer = combineReducers({
  stores,
  storeDetail,
  storeProduct
})

export default appReducer
