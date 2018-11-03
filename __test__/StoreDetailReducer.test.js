import { storeDetail } from '../src/reducers/StoreDetailReducer'
import {
  STORE_DETAIL_REQUEST,
  STORE_DETAIL_REQUEST_SUCCESS,
  STORE_DETAIL_REQUEST_FAILED
} from '../src/actions/StoreDetailAction'

describe('store detail reducer', () => {
  it('test - initial state', () => {
    const initialState = {
      data: null,
      isLoading: false,
      error: null
    }
    expect(storeDetail(undefined, {})).toEqual(initialState)
  })

  it('test - STORE_DETAIL_REQUEST', () => {
    expect(
      storeDetail(null, {
        type: STORE_DETAIL_REQUEST,
        storeId: '12345'
      })
    ).toEqual({ isLoading: true })
  })

  it('test - STORE_DETAIL_REQUEST_SUCCESS', () => {
    expect(
      storeDetail(null, {
        type: STORE_DETAIL_REQUEST_SUCCESS,
        data: []
      })
    ).toEqual({ isLoading: false, data: [] })
  })

  it('test - STORE_DETAIL_REQUEST_FAILED', () => {
    expect(
      storeDetail(null, {
        type: STORE_DETAIL_REQUEST_FAILED,
        error: 'test error'
      })
    ).toEqual({ isLoading: false, error: 'test error' })
  })
})
