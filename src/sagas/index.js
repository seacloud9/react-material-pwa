import { takeLatest } from 'redux-saga/effects'
import { WordpressSaga, WordpressRedux } from 'wp-react-core'
const { wpFetchAll, wpFetchSlug, wpFetchPage } = WordpressSaga
const { WordpressTypes } = WordpressRedux

function * appSagas () {
  yield [
    takeLatest(WordpressTypes.WP_SLUG_REQUESTED, wpFetchSlug),
    takeLatest(WordpressTypes.WP_PAGE_REQUESTED, wpFetchPage),
    takeLatest(WordpressTypes.WP_ALL_REQUESTED, wpFetchAll)
  ]
}

export default appSagas
