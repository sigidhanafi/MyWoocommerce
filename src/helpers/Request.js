import axios from 'axios'

export const storeRequest = () => {
  return axios
    .get('http://ubux.biz/test/get-all-stores')
    .then(response => response.data)
}
