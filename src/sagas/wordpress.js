import { call, put } from 'redux-saga/effects'
import createApi from '../api'
import actions from '../reducers/wordpress'

export function * wpFetchAll (payload) {
    try {
      console.log('wpFetchAll')
      console.log(payload)
      console.log('wpFetchAll')  
      const apiCreateAll = createApi.getAll(payload)
      const data = yield call(apiCreateAll._getAllOptions)
      console.log('wpFetchAll')
      console.log(data)
      console.log('wpFetchAll')
      yield put(actions.wpAllSucceeded({payload:data}))
    } catch (e) {
      yield put(actions.failure({error:e}))
    }
  }