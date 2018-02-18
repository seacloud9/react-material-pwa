import { takeLatest } from 'redux-saga/effects'
import {wpFetchAll} from './wordpress'
import { WordpressTypes } from '../reducers/wordpress'

function * appSagas () {
  yield [
    takeLatest(WordpressTypes.WP_ALL_REQUESTED, wpFetchAll)
  ]
}

export default appSagas
