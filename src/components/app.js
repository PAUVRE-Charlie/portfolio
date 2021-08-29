import { h } from 'preact'
import { Router } from 'preact-router'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home'
import Project from '../routes/project'
import { LanguageProvider } from './language'

const App = () => (
  <div id='app'>
    <LanguageProvider>
      <Router>
        <Home path='/'/>
        <Project path='/project/:project' />
      </Router>
    </LanguageProvider>
  </div>
)

export default App
