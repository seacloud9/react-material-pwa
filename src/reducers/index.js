/**
 * Created by brsmith on 7/3/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
const mainApp = combineReducers({
  router: routerReducer,
  wp: require('./wordpress').reducer
})

export default mainApp
