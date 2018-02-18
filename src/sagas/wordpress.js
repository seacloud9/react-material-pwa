import { call, put } from 'redux-saga/effects'
import createApi from '../api'
import actions from '../reducers/wordpress'

export function * wpFetchAll (payload) {
  try {
    const apiCreateAll = createApi.getAll(payload)
    const data = yield call(apiCreateAll._getAllOptions)
    yield put(actions.wpAllSucceeded(data))
  } catch (e) {
    yield put(actions.failure({error: e}))
  }
}
