import { combineEpics, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
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
    mergeMap(async () => {
      return await axios
        .get('http://ubux.biz/test/get-all-stores')
        .then(response => {
          const {
            data: { stores }
          } = response
          console.log('haha', stores)
          return { type: STORE_REQUEST_SUCCESS, data: stores }
        })
      // await new Promise(resolve => setTimeout(resolve, 3000))
    })
  )

export const combinedStoreEpic = combineEpics(fetchDataEpic)
