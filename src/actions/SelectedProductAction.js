import { combineEpics, ofType } from 'redux-observable'
import { mergeMap, map, catchError, filter } from 'rxjs/operators'
import { from, of } from 'rxjs'
import find from 'lodash/find'
import remove from 'lodash/remove'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const SELECT_PRODUCT_DONE = 'SELECT_PRODUCT_DONE'
export const DESELECT_PRODUCT = 'DESELECT_PRODUCT'
export const DESELECT_PRODUCT_DONE = 'DESELECT_PRODUCT_DONE'

export const selectProduct = product => {
  return {
    type: SELECT_PRODUCT,
    product
  }
}

export const deselectProduct = product => {
  return {
    type: DESELECT_PRODUCT,
    product
  }
}

export const selectProductEpic = (action$, state$) =>
  action$.pipe(
    ofType(SELECT_PRODUCT),
    map(action => {
      const {
        selectedProduct: { data: currentSelectedProduct }
      } = state$.value
      const { product } = action
      const productExist = find(
        currentSelectedProduct,
        currentSelectedProduct => currentSelectedProduct._id === product._id
      )
      let products = currentSelectedProduct
      if (!productExist) {
        products = [...products, product]
      }
      return { type: SELECT_PRODUCT_DONE, data: products }
    })
  )

export const deselectProductEpic = (action$, state$) =>
  action$.pipe(
    ofType(DESELECT_PRODUCT),
    map(action => {
      const {
        selectedProduct: { data: currentSelectedProduct }
      } = state$.value
      const { product } = action
      const removedProduct = remove(
        currentSelectedProduct,
        currentSelectedProduct => currentSelectedProduct._id === product._id
      )
      let products = currentSelectedProduct
      return { type: DESELECT_PRODUCT_DONE, data: products }
    })
  )

export const combinedSelectedProductEpic = combineEpics(
  selectProductEpic,
  deselectProductEpic
)
