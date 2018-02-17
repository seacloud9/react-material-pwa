/**
 * Created by brsmith on 7/9/17.
 */
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPosts: ['payload']
})

export const StatsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  posts:[]
}

/* ------------- Reducers ------------- */

export const getPosts = (state, payload) => {
  return state.merge({...payload})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POSTS]: getPosts
})
