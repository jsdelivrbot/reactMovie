import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'

// eslint-disable-next-line fp/no-class
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="margin-none padding-none">
          <header className="margin-none paddingvertical-xxsmall  backgroundcolor-black80 white80">
            <h1 className="ph3">Training Video Management</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/videos/new" component={Form} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
