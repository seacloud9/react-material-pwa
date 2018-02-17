import {create} from 'apisauce'

// define the api
const icreateApi = create({
  baseURL: 'http://i-create.org/wp-json/wp/v2/',
  headers: {'content-type': 'application/json'}
})

const getAll = (data = {}) => {
  const _getAllOptions = () => icreateApi.get('', null, icreateApi.headers)
  return {
    _getAllOptions
  }
}

export default {
  getAll
}
