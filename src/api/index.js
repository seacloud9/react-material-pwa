import {create} from 'apisauce'

// define the api
const icreateApi = create({
  baseURL: 'http://i-create.org/wp-json/wp/v2/',
  headers: {'content-type': 'application/json'}
})

const getAll = (data = {pageName: null}) => {
  const _getAllOptions = () => icreateApi.get(((data.payload && data.payload.pageName) ? `posts?slug=${data.payload.pageName}` : 'posts?per_page=12'), null, icreateApi.headers)
  return {
    _getAllOptions
  }
}

export default {
  getAll
}
