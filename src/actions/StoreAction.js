import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, catchError, filter, tap } from 'rxjs/operators'
import { from, of } from 'rxjs'

export const STORE_REQUEST = 'STORE_REQUEST'
export const STORE_REQUEST_SUCCESS = 'STORE_REQUEST_SUCCESS'
export const STORE_REQUEST_FAILED = 'STORE_REQUEST_FAILED'
export const STORE_SEARCH_REQUEST = 'STORE_SEARCH_REQUEST'

import { storeRequest, searchStoreRequest } from '../helpers/Request'

export const fetchData = () => {
  return {
    type: STORE_REQUEST
  }
}

export const searchStoreData = keyword => {
  return {
    type: STORE_SEARCH_REQUEST,
    keyword
  }
}

export const fetchDataEpic = action$ =>
  action$.pipe(
    ofType(STORE_REQUEST),
    mergeMap(() => {
      return from(storeRequest()).pipe(
        map(data => {
          const { stores } = data
          const dataStore = stores.filter(store => store.tradingName)
          return { type: STORE_REQUEST_SUCCESS, data: dataStore }
        })
      )
    }),
    catchError(error => {
      return of({ type: STORE_REQUEST_FAILED, error: error.message })
    })
  )

export const searchStoreDataEpic = (action$, state$) =>
  action$.pipe(
    ofType(STORE_SEARCH_REQUEST),
    mergeMap(action => {
      if (action.keyword.length >= 3) {
        return from(searchStoreRequest(action.keyword)).pipe(
          map(data => {
            const { stores } = data
            const dataStore = stores
              .filter(store => store.tradingName)
              .map(data => {
                return { ...data, storeId: data._id }
              })
            return { type: STORE_REQUEST_SUCCESS, data: dataStore }
          })
        )
      }
      return of({ type: STORE_REQUEST })
    }),
    catchError(error => {
      return of({ type: STORE_REQUEST_FAILED, error: error.message })
    })
  )

export const combinedStoreEpic = combineEpics(
  fetchDataEpic,
  searchStoreDataEpic
)
