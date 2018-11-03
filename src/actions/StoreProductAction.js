import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, catchError, filter } from 'rxjs/operators'
import { from, of } from 'rxjs'

export const STORE_PRODUCT_REQUEST = 'STORE_PRODUCT_REQUEST'
export const STORE_PRODUCT_REQUEST_SUCCESS = 'STORE_PRODUCT_REQUEST_SUCCESS'
export const STORE_PRODUCT_REQUEST_FAILED = 'STORE_PRODUCT_REQUEST_FAILED'

import { storeProductRequest } from '../helpers/Request'

export const fetchDataStoreProduct = storeId => {
  return {
    type: STORE_PRODUCT_REQUEST,
    storeId
  }
}

export const fetchDataStoreProductEpic = action$ =>
  action$.pipe(
    ofType(STORE_PRODUCT_REQUEST),
    mergeMap(action => {
      return from(storeProductRequest(action.storeId)).pipe(
        map(data => {
          const { products } = data
          return { type: STORE_PRODUCT_REQUEST_SUCCESS, data: products }
        })
      )
    }),
    catchError(error => {
      return of({ type: STORE_PRODUCT_REQUEST_FAILED, error: error.message })
    })
  )

export const combinedStoreProductEpic = combineEpics(fetchDataStoreProductEpic)
