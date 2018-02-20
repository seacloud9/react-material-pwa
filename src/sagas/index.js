import { takeLatest } from 'redux-saga/effects'
import {wpFetchAll, wpFetchSlug, wpFetchPage} from './wordpress'
import { WordpressTypes } from '../reducers/wordpress'

function * appSagas () {
  yield [
    takeLatest(WordpressTypes.WP_SLUG_REQUESTED, wpFetchSlug),
    takeLatest(WordpressTypes.WP_PAGE_REQUESTED, wpFetchPage),
    takeLatest(WordpressTypes.WP_ALL_REQUESTED, wpFetchAll)
  ]
}

export default appSagas
