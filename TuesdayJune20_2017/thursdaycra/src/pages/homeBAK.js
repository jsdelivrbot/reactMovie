import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map, filter } from 'ramda'
import Section from '../container/test-filter'

class Home extends React.Component {
  componentDidMount() {
    const props = this.props
    fetch('http://localhost:4000/videos')
      .then(res => res.json())
      .then(videos => {
        console.log('Video list: ', videos)
        const xxx = videos.filter(data => data.categories === 'Cat A')
        props.dispatch({
          type: 'FILTER_VIDS',
          payload: xxx,

          type: 'SET_VIDEOS',
          payload: videos
        })
      })
  }

  render() {
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
      </div>
    )
    // const catgorylist = function(video) {
    //   return (
    //     <div>
    //       {video.categories}
    //     </div>
    //   )
    // }
  }
}

const connector = connect(state => state)

export default connector(Home)
