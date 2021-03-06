import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map, filter } from 'ramda'
import Section from '../container/test-filter'
import TextField from '../components/text-field'

class Home extends React.Component {
  componentDidMount() {
    const props = this.props

    fetch('http://localhost:4000/categories')
      .then(res => res.json())
      .then(v => v.values)
      .then(categories => {
        props.dispatch({
          type: 'SET_CATEGORIES',
          payload: categories
        })
      })

    fetch('http://localhost:4000/videos')
      .then(res => res.json())
      .then(videos => {
        //console.log('Video list: ', videos)
        //const yyy = videos
        //const copy = Object.assign({}, yyy.categories)
        // yyy.appendvideos.categories
        // yyy.push(filter(videos, videos.categories))
        //console.log('Cat: ', yyy)
        // console.log('Copy: ', copy)
        const xxx = videos.filter(data => data.categories !== 'Cat A')
        console.log('Filter list', xxx)
        props.dispatch({
          type: 'SET_VIDEOS',
          payload: xxx
        })
      })
  }

  render() {
    // <div><TextField
    //   label="Cat Filter"
    //   value={props.video.categories}
    //   description="Add a category for the video"
    //   onChange={props.getCategory}/>
    const li = function(video) {
      return (
        <li key={video.id}>
          {video.name}| {video.description} | {video.categories} | {video.url}{' '}
          |{' '}
        </li>
      )
    }

    const props = this.props
    return (
      <div className="padding-medium">
        <Link to="/videos/new">
          <Button>Add Video</Button>
        </Link>
        <h2>Videos</h2>

        <ul>
          {map(li, props.videos)}
        </ul>
        <h2>Categories</h2>
        <ul>
          {map(s => <li key={s}>{s}</li>, props.categories)}
        </ul>
      </div>
    )
    // const catgorylist = function(video) {
    //   return (
    //     <div>
    //       {video.categories}
    //     </div>
    //   )
    // }
    // </div>
  }
}

const connector = connect(state => state)

export default connector(Home)
