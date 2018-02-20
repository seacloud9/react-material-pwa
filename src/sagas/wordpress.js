import { call, put } from 'redux-saga/effects'
import createApi from '../api'
import actions from '../reducers/wordpress'

export function * wpFetchAll (payload) {
  try {
    const apiCreateAll = createApi.getAll(payload)
    const data = yield call(apiCreateAll._getAll)
    yield put(actions.wpAllSucceeded(data))
  } catch (e) {
    yield put(actions.failure({error: e}))
  }
}

export function * wpFetchPage (payload) {
  try {
    const apiCreateAll = createApi.getPage(payload)
    const data = yield call(apiCreateAll._getPage)
    yield put(actions.wpPageSucceeded(data))
  } catch (e) {
    yield put(actions.failure({error: e}))
  }
}

export function * wpFetchSlug (payload) {
  try {
    const apiCreateAll = createApi.getSlug(payload)
    const data = yield call(apiCreateAll._getSlug)
    yield put(actions.wpSlugSucceeded(data))
  } catch (e) {
    yield put(actions.failure({error: e}))
  }
}
