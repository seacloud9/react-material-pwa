import { call, put, takeLatest } from 'redux-saga/effects'
import createApi from '../api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * wpFetchAll (action) {
  try {
    const apiCreateAll = createApi.getAll()
    const data = yield call(apiCreateAll._getAllOptions)
    console.log('wpFetchAll')
    console.log(data)
    console.log('wpFetchAll')
    yield put({type: 'WP_ALL_SUCCEEDED', payload: data})
  } catch (e) {
    yield put({type: 'WP_FAILED', error: e})
  }
}

function * appSagas () {
  yield takeLatest('WP_ALL_REQUESTED', wpFetchAll)
}

export default appSagas
