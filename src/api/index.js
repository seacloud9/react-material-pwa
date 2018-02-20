import {create} from 'apisauce'

const setSize = 12
// define the api
const icreateApi = create({
  baseURL: 'http://i-create.org/wp-json/wp/v2/',
  headers: {'content-type': 'application/json'}
})

const getAll = (data = {pageName: null}) => {
  const _getAll = () => icreateApi.get(`posts?per_page=${setSize}`, null, icreateApi.headers)
  return {
    _getAll
  }
}

const getSlug = (data = {pageName: null}) => {
  const _getSlug = () => icreateApi.get(`posts?slug=${data.payload.pageName}`, null, icreateApi.headers)
  return {
    _getSlug
  }
}

const getPage = (data = {pageNumber: 0}) => {
  const _getPage = () => icreateApi.get(`posts?page=${data.payload.pageNumber}&per_page=${setSize}`, null, icreateApi.headers)
  return {
    _getPage
  }
}

export default {
  getAll,
  getSlug,
  getPage
}
