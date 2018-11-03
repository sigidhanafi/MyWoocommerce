import { storeProduct } from '../src/reducers/StoreProductReducer'
import {
  STORE_PRODUCT_REQUEST,
  STORE_PRODUCT_REQUEST_SUCCESS,
  STORE_PRODUCT_REQUEST_FAILED
} from '../src/actions/StoreProductAction'

describe('store product reducer', () => {
  it('test - initial state', () => {
    const initialState = {
      data: [],
      isLoading: false,
      error: null
    }
    expect(storeProduct(undefined, {})).toEqual(initialState)
  })

  it('test - STORE_PRODUCT_REQUEST', () => {
    expect(
      storeProduct(null, {
        type: STORE_PRODUCT_REQUEST,
        storeId: '12345'
      })
    ).toEqual({ isLoading: true })
  })

  it('test - STORE_PRODUCT_REQUEST_SUCCESS', () => {
    expect(
      storeProduct(null, {
        type: STORE_PRODUCT_REQUEST_SUCCESS,
        data: []
      })
    ).toEqual({ isLoading: false, data: [] })
  })

  it('test - STORE_PRODUCT_REQUEST_FAILED', () => {
    expect(
      storeProduct(null, {
        type: STORE_PRODUCT_REQUEST_FAILED,
        error: 'test error'
      })
    ).toEqual({ isLoading: false, error: 'test error' })
  })
})
