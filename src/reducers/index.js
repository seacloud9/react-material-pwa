/**
 * Created by brsmith on 7/3/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { WordpressRedux } from 'wp-react-core'
const mainApp = combineReducers({
  router: routerReducer,
  wp: WordpressRedux.reducer
})

export default mainApp
