/**
 * Created by brsmith on 7/9/17.
 */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: ['payload'],
  wpAllRequested: ['payload'],
  wpPageRequested: ['payload'],
  wpSlugRequested: ['payload'],
  wpFailed: ['error'],
  wpPageSucceeded: ['payload'],
  wpSlugSucceeded: ['payload'],
  wpAllSucceeded: ['payload']
})

export const WordpressTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  index: 0,
  posts: [],
  post: null
})

/* ------------- Reducers ------------- */

export const request = (state) => {
  return state.merge({fetching: true, error: null})
}

export const wpPageSucceeded = (state, {payload}) => {
  const newDataArray = state.posts.concat(payload.data)
  return state.merge({posts: newDataArray})
}

export const wpSlugSucceeded = (state, {payload}) => {
  return state.merge({post: payload.data[0]})
}

export const wpAllSucceeded = (state, {payload}) => {
  return state.merge({posts: payload.data})
}

export const getPosts = (state, payload) => {
  return state.merge({...payload})
}

export const failure = (state, { error }) => {
  return state.merge({ fetching: false, error: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WP_SLUG_REQUESTED]: request,
  [Types.WP_PAGE_REQUESTED]: request,
  [Types.WP_ALL_REQUESTED]: request,
  [Types.WP_PAGE_SUCCEEDED]: wpPageSucceeded,
  [Types.WP_SLUG_SUCCEEDED]: wpSlugSucceeded,
  [Types.WP_ALL_SUCCEEDED]: wpAllSucceeded,
  [Types.WP_FAILED]: failure,
  [Types.GET_POSTS]: getPosts
})
