import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import tachyons from 'tachyons'
import { Provider } from 'react-redux'
import store from './store'
//import { createSelector } from 'reselect'

const root = document.getElementById('root')
const render = ReactDOM.render

render(<Provider store={store}><App /></Provider>, root)
