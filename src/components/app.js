import { h } from 'preact'
import { Router } from 'preact-router'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home'
import Project from '../routes/project'

const App = () => (
  <div id='app'>
    <Router>
      <Home path='/' />
      <Project path='/project/:project' />
    </Router>
  </div>
)

export default App
