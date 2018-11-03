import { selectedProduct } from '../src/reducers/SelectedProductReducer'
import {
  SELECT_PRODUCT_DONE,
  DESELECT_PRODUCT_DONE
} from '../src/actions/SelectedProductAction'

describe('store selected product reducer', () => {
  it('test - initial state', () => {
    const initialState = {
      data: []
    }
    expect(selectedProduct(undefined, {})).toEqual(initialState)
  })

  it('test - SELECT_PRODUCT_DONE', () => {
    const data = [{ id: '1', name: 'product name' }]
    expect(
      selectedProduct(null, {
        type: SELECT_PRODUCT_DONE,
        data
      })
    ).toEqual({ data })
  })

  it('test - DESELECT_PRODUCT_DONE', () => {
    const data = [{ id: '1', name: 'product name' }]
    expect(
      selectedProduct(null, {
        type: DESELECT_PRODUCT_DONE,
        data
      })
    ).toEqual({ data })
  })
})
