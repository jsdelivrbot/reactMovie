// import Form from './pages/form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { merge } from 'ramda'
import thunk from 'redux-thunk'

export default function(state = { name: '', categories: '' }, action) => {
  switch (action.type) {
    case 'SET_VIDEO_NAME':
      console.log('value here')
      return merge(state, { name: action.payload })
    case 'SET_VIDEO_DESCRIPTION':
      return merge(state, { description: action.payload })
    case 'SET_VIDEO_CATEGORY':
      return merge(state, { categories: action.payload })
    case 'SET_VIDEO_URL':
      return merge(state, { url: action.payload })
    default:
      return state
  }
}
