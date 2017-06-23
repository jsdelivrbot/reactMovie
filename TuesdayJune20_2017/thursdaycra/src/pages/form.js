import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form
        className="measure"
        onSubmit={event => {
          event.preventDefault()
          props.save(props.video, props.history)
        }}>
        <div className="measure">
          <label className="f6 fontweight-bold display-block white marginbottom-xxsmall" />
        </div>
        <TextField
          label="Name"
          value={props.video.name}
          description="Enter a Name for the video"
          onChange={props.setName}
        />
        <div>
          <TextField
            label="Description"
            value={props.video.description}
            description="Enter short description of the video"
            onChange={props.setDescription}
          />
          <TextField
            label="Categories"
            value={props.video.categories}
            onChange={props.setCategory}
            description="Add a category for the video"
          />
          <hr />
          <Button>Submit It!</Button>
        </div>
      </form>
    </div>
  )
}
const save = video => {
  return fetch('http://localhost:4000/videos', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(video)
  }).then(res => res.json())
}

const connector = connect(state => state, {
  save: (video, history) => {
    return dispatch => {
      dispatch({ type: 'SUBMITTING' })
      return save(video)
        .then(res => {
          history.push('/')
        })
        .then(res => ({ type: 'FINISHED' }))
    }
  },
  setName: text => {
    return { type: 'SET_VIDEO_NAME', payload: text }
  }
})
export default connector(Form)
