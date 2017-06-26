var expect = require('expect')
var createSpy = expect.createSpy
var spyOn = expect.spyOn
var isSpy = expect.isSpy
import { createStore } from 'redux'

// function counter(state, action) {
//   if (typeof state === 'undefined') {
//     return 0
//   }
//   if (action.type === 'INCREMENT') {
//     return state + 1
//   } else if (action.type === 'DECREMENT') {
//     return state - 1
//   } else {
//     return state
//   }
// }
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const createStore = reducer => {
  let state
  let listeners - []
  const getState = () => state
  const dispatch = action => {
    state = reducer(state,action)
    listeners.forEach(listener => listener())

  }
  const subscribe = listener => {
    listeners.push(listener)
    return() =>
    {
      listeners = listeners.filter(l => l !==listener)
    }
    dispatch({})
  }
  return { getState, dispatch, subscribe }
}

// const { createStore } = Redux

const store = createStore(counter)

console.log(store.getState())

const render = () => {
  document.body.innerText = store.getState()
}

store.subscribe(render => {
  render()
})

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

expect(counter(0, { type: 'INCREMENT' })).toEqual(1)

expect(counter(1, { type: 'INCREMENT' })).toEqual(2)

expect(counter(2, { type: 'DECREMENT' })).toEqual(1)

expect(counter(1, { type: 'DECREMENT' })).toEqual(0)

expect(counter(1, { type: 'SOMETHINGESLE' })).toEqual(1)

console.log('Tests Passed')
