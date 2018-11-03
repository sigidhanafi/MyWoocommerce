import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, mapTo } from 'rxjs/operators'
import { from } from 'rxjs'
import axios from 'axios'

export const STORE_REQUEST = 'STORE_REQUEST'
export const STORE_REQUEST_SUCCESS = 'STORE_REQUEST_SUCCESS'
export const STORE_REQUEST_FAILED = 'STORE_REQUEST_FAILED'

export const fetchData = () => {
  return {
    type: STORE_REQUEST
  }
}

export const fetchDataEpic = action$ =>
  action$.pipe(
    ofType(STORE_REQUEST),
    mergeMap(() => {
      return from(
        axios
          .get('http://ubux.biz/test/get-all-stores')
          .then(response => response.data)
      ).pipe(
        map(response => {
          console.log('Response', response)
          return { type: STORE_REQUEST_SUCCESS, data: [] }
        })
      )
    })
  )

export const combinedStoreEpic = combineEpics(fetchDataEpic)
