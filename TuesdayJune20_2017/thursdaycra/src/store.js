import { createStore, combineReducers, applyMiddleware } from 'redux'
import { merge } from 'ramda'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    videos: (state = [], action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        default:
          return state
      }
    },
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
  }),
  applyMiddleware(thunk)
)
export default store
