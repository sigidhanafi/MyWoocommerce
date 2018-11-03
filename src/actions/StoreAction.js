import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'

export const STORE_REQUEST = 'STORE_REQUEST'
export const STORE_REQUEST_SUCCESS = 'STORE_REQUEST_SUCCESS'
export const STORE_REQUEST_FAILED = 'STORE_REQUEST_FAILED'

import { storeRequest } from '../helpers/Request'

export const fetchData = () => {
  return {
    type: STORE_REQUEST
  }
}

// export const fetchDataEpic = action$ =>
//   action$.pipe(
//     ofType(STORE_REQUEST),
//     mergeMap(() => {
//       return from(
//         axios
//           .get('http://ubux.biz/test/get-all-stores')
//           .then(response => response.data)
//       ).pipe(
//         mergeMap(() => {
//           return from(
//             axios
//               .get('http://ubux.biz/test/get-all-stores')
//               .then(response => response.data)
//           ).pipe(
//             map(response => {
//               console.log('Response', response)
//               return { type: STORE_REQUEST_SUCCESS, data: [] }
//             })
//           )}
//         )
//       )
//     }),
//     catchError(err => {
//       console.log('Err', err)
//       return of({ type: STORE_REQUEST_FAILED })
//     }),
//   )

export const fetchDataEpic = action$ =>
  action$.pipe(
    ofType(STORE_REQUEST),
    mergeMap(() => {
      return from(storeRequest()).pipe(
        map(data => {
          const { stores } = data
          return { type: STORE_REQUEST_SUCCESS, data: stores }
        })
      )
    }),
    catchError(error => {
      return of({ type: STORE_REQUEST_FAILED, error: error.message })
    })
  )

export const combinedStoreEpic = combineEpics(fetchDataEpic)
