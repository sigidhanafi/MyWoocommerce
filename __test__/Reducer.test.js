import { stores } from '../src/reducers/StoreReducer'
import {
  STORE_REQUEST,
  STORE_REQUEST_SUCCESS,
  STORE_REQUEST_FAILED,
  STORE_SEARCH_REQUEST
} from '../src/actions/StoreAction'

describe('stores reducer', () => {
  it('test - initial state', () => {
    expect(stores(undefined, {})).toEqual({
      data: [],
      isLoading: false,
      error: null
    })
  })

  it('test - STORE_REQUEST', () => {
    expect(
      stores(null, {
        type: STORE_REQUEST
      })
    ).toEqual({
      isLoading: true
    })
  })

  it('test - STORE_REQUEST_SUCCESS', () => {
    expect(
      stores(null, {
        type: STORE_REQUEST_SUCCESS,
        data: []
      })
    ).toEqual({
      data: [],
      isLoading: false
    })
  })

  it('test - STORE_REQUEST_FAILED', () => {
    expect(
      stores(null, {
        type: STORE_REQUEST_FAILED,
        error: 'test error'
      })
    ).toEqual({
      isLoading: false,
      error: 'test error'
    })
  })

  it('test - STORE_SEARCH_REQUEST', () => {
    expect(
      stores(null, {
        type: STORE_SEARCH_REQUEST,
        keyword: 'test keyword'
      })
    ).toEqual({
      isLoading: true
    })
  })
})
