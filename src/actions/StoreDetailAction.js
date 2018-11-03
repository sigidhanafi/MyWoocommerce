import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, catchError, filter } from 'rxjs/operators'
import { from, of } from 'rxjs'

export const STORE_DETAIL_REQUEST = 'STORE_DETAIL_REQUEST'
export const STORE_DETAIL_REQUEST_SUCCESS = 'STORE_DETAIL_REQUEST_SUCCESS'
export const STORE_DETAIL_REQUEST_FAILED = 'STORE_DETAIL_REQUEST_FAILED'

import { storeDetailRequest } from '../helpers/Request'

export const fetchDataStoreDetail = storeId => {
  return {
    type: STORE_DETAIL_REQUEST,
    storeId
  }
}

export const fetchDataStoreDetailEpic = action$ =>
  action$.pipe(
    ofType(STORE_DETAIL_REQUEST),
    mergeMap(action => {
      return from(storeDetailRequest(action.storeId)).pipe(
        map(data => {
          const { store } = data
          return { type: STORE_DETAIL_REQUEST_SUCCESS, data: store }
        })
      )
    }),
    catchError(error => {
      return of({ type: STORE_DETAIL_REQUEST_FAILED, error: error.message })
    })
  )

export const combinedStoreDetailEpic = combineEpics(fetchDataStoreDetailEpic)
