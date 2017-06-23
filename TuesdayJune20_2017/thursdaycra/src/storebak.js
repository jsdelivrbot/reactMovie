import { createStore, combineReducers, applyMiddleware } from 'redux'
import { merge } from 'ramda'
import thunk from 'redux-thunk'

// const rootReducer = function(state, action) {
//   return state
// }

const store = createStore(
  combineReducers({
    video: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })
        case 'SET_VIDEO_DESCRIPTION':
          return merge(state, { description: action.payload })
        case 'SET_VIDEO_CATEGORY':
          return merge(state, { categories: action.payload })
        default:
          return state
      }
    }
  })
)

export default store
