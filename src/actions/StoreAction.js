import { combineEpics, ofType } from 'redux-observable'
import { mapTo, mergeMap } from 'rxjs/operators'
import { Observable } from 'rx'

const STORE_REQUEST = 'STORE_REQUEST'
const STORE_REQUEST_SUCCESS = 'STORE_REQUEST_SUCCESS'
const STORE_REQUEST_FAILED = 'STORE_REQUEST_FAILED'

export const fetchData = () => {
  return {
    type: STORE_REQUEST
  }
}

// export const fetchDataEpic = action$ =>
//   action$.pipe(
//     ofType(STORE_REQUEST),
//     mergeMap(async () => {
//       await new Promise(resolve => setTimeout(resolve, 3000))
//       return { type: STORE_REQUEST_SUCCESS }
//     })
//   )

export const fetchDataEpic = action$ =>
  action$.ofType(STORE_REQUEST).mergeMap(() => {
    return { type: STORE_REQUEST_SUCCESS }
  })

export const combinedStoreEpic = combineEpics(fetchDataEpic)
