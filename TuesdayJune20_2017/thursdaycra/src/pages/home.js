import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

class Home extends React.Component {
  componentDidMount() {
    const props = this.props
    fetch('http://localhost:4000/videos')
      .then(res => res.json())
      .then(videos => {
        props.dispatch({ type: 'SET_VIDEOS', payload: videos })
      })
  }
  render() {
    const li = function(video) {
      return <li key={video.id}>{video.name}</li>
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
  }
}

const connector = connect(state => state)

export default connector(Home)
