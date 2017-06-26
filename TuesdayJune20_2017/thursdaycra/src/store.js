import { createStore, combineReducers, applyMiddleware } from 'redux'
import { merge } from 'ramda'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    categories: (state = [], action) => {
      switch (action.type) {
        case 'SET_CATEGORIES':
          return action.payload
        // case 'GET_VIDEO_CATEGORY':
        //   return state
        default:
          return state
      }
    },
    videos: (state = [], action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        case 'FILTER_VIDS':
          return state.map(video => {
            if (video.categories !== action.payload.categories) {
              console.log('Logging' + video.categories)
              return action.payload
            }
          })
        default:
          return state
      }
    },
    video: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          console.log('value here')
          return merge(state, { name: action.payload })
        case 'SET_VIDEO_DESCRIPTION':
          return merge(state, { description: action.payload })
        case 'SET_VIDEO_CATEGORIES':
          return merge(state, { categories: action.payload })
        case 'SET_VIDEO_URL':
          return merge(state, { url: action.payload })
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)
export default store
