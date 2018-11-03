import {
  fetchData,
  searchStoreData,
  STORE_REQUEST,
  STORE_SEARCH_REQUEST
} from '../src/actions/StoreAction'
import {
  fetchDataStoreDetail,
  STORE_DETAIL_REQUEST
} from '../src/actions/StoreDetailAction'
import {
  fetchDataStoreProduct,
  STORE_PRODUCT_REQUEST
} from '../src/actions/StoreProductAction'
import {
  selectProduct,
  deselectProduct,
  SELECT_PRODUCT,
  DESELECT_PRODUCT
} from '../src/actions/SelectedProductAction'

describe('actions', () => {
  it('test - action fetch data', () => {
    const expectedAction = {
      type: STORE_REQUEST
    }
    expect(fetchData()).toEqual(expectedAction)
  })
  it('test - action search data', () => {
    const keyword = 'test keyword'
    const expectedAction = {
      type: STORE_SEARCH_REQUEST,
      keyword
    }
    expect(searchStoreData(keyword)).toEqual(expectedAction)
  })
  it('test - action fetchDataStoreDetail', () => {
    const expectedAction = {
      type: STORE_DETAIL_REQUEST,
      storeId: '12345'
    }
    expect(fetchDataStoreDetail('12345')).toEqual(expectedAction)
  })
  it('test - action fetchDataStoreProduct', () => {
    const expectedAction = {
      type: STORE_PRODUCT_REQUEST,
      storeId: '12345'
    }
    expect(fetchDataStoreProduct('12345')).toEqual(expectedAction)
  })
  it('test - action selectProduct', () => {
    const product = { id: '1', name: 'product name' }
    const expectedAction = {
      type: SELECT_PRODUCT,
      product
    }
    expect(selectProduct(product)).toEqual(expectedAction)
  })
  it('test - action deselectProduct', () => {
    const product = { id: '1', name: 'product name' }
    const expectedAction = {
      type: DESELECT_PRODUCT,
      product
    }
    expect(deselectProduct(product)).toEqual(expectedAction)
  })
})
