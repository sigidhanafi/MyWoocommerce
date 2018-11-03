import axios from 'axios'

const baseUrl = 'http://ubux.biz/test'

export const storeRequest = () => {
  return axios.get(`${baseUrl}/get-all-stores`).then(response => response.data)
}

export const storeDetailRequest = storeId => {
  return axios
    .get(`${baseUrl}/get-store?storeId=${storeId}`)
    .then(response => response.data)
}

export const storeProductRequest = storeId => {
  return axios
    .get(`${baseUrl}/get-store-products?storeId=${storeId}`)
    .then(response => response.data)
}

export const searchStoreRequest = keyword => {
  return axios({
    method: 'post',
    url: `${baseUrl}/search-store`,
    data: {
      keyword
    }
  }).then(response => response.data)
}
