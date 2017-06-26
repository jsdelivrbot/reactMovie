import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map, split, concat, uniq } from 'ramda'

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form
        className="measure"
        onSubmit={event => {
          event.preventDefault()
          props.save(props.video, props.history, props.categories)
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
        <TextArea
          label="Description"
          description="Describe your Video"
          value={props.video.description}
          onChange={props.setDescription}
        />

        <TextField
          label="Url"
          value={props.video.url}
          description="Enter a Name for the video"
          onChange={props.setUrl}
        />

        <TextField
          label="Categories"
          value={props.video.categories}
          description="Add a category for the video"
          onChange={props.setCategories}
        />
        <div>
          <hr />
          <Button>Submit It!</Button>
        </div>
      </form>
    </div>
  )
}
const save = video => {
  console.log(video)
  return fetch('http://localhost:4000/videos', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(video)
  }).then(res => res.json())
}

const updateCategories = categories => {
  return fetch('http://localhost:4000/categories', {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ values: categories })
  }).then(res => res.json())
}

const connector = connect(state => state, mapActionsToProps)

function mapActionsToProps(dispatch) {
  return {
    save: (video, history, categories) => {
      video.categories = map(s => s.trim(), split(',', video.categories))
      // compare categories to video.categories
      console.log('master categories', categories)
      console.log('video categories', video.categories)
      //
      const masterCategories = uniq(concat(categories, video.categories))
      console.log('result', masterCategories)

      dispatch((dispatch, getState) => {
        dispatch({ type: 'SUBMITTING' })

        save(video)
          .then(res => {
            history.push('/')
          })
          .then(res => {
            dispatch({ type: 'FINISHED' })
          })

        updateCategories(masterCategories).then(res => {
          dispatch({ type: 'SET_CATEGORIES', payload: masterCategories })
        })
      })
    },

    setName: text => {
      // console.log('name')
      dispatch({ type: 'SET_VIDEO_NAME', payload: text })
    },
    setDescription: text => {
      dispatch({ type: 'SET_VIDEO_DESCRIPTION', payload: text })
    },
    setCategories: text => {
      console.log('Set Cat')
      dispatch({
        type: 'SET_VIDEO_CATEGORIES',
        payload: text
      })
    },
    getCategory: text => {
      dispatch({
        type: 'GET_VIDEO_CATEGORY',
        payload: text
      })
    },
    setUrl: text => {
      dispatch({ type: 'SET_VIDEO_URL', payload: text })
    }
  }

  // const counter = save.length
  // console.log(counter)
}
export default connector(Form)
