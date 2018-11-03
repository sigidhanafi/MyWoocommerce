import { combineReducers } from 'redux'
import { stores } from './StoreReducer'
import { storeDetail } from './StoreDetailReducer'

const appReducer = combineReducers({
  stores,
  storeDetail
})

export default appReducer
