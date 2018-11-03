import { fetchData, searchStoreData } from '../src/actions/StoreAction'
import { STORE_REQUEST, STORE_SEARCH_REQUEST } from '../src/actions/StoreAction'

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
})
