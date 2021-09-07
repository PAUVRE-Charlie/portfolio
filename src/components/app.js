import { h } from 'preact'
import { useState } from 'react'
import { Router } from 'preact-router'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home'
import Project from '../routes/project'
import { LanguageProvider } from './language'

import GoTopButton from './goTopButton'

const App = () => {

  const getScroll = () => {
    if(typeof window !== "undefined") return window?.pageYOffset
    else if(typeof document !== "undefined") return document?.documentElement?.scrollTop
    return 0
  }
  const [scroll, setScroll] = useState(getScroll())

  return <div id="app" onWheel={(e) => {if(e.pageY - e.clientY <= 600 || (scroll <= 600 && e.pageY - e.clientY > 600)) setScroll(e.pageY - e.clientY)}}>
    <LanguageProvider>
      <Router>
        <Home path='/' scroll={scroll} />
        <Project path='/project/:project' scroll={scroll} />
      </Router>
    </LanguageProvider>
    <GoTopButton scroll={scroll} />
  </div>
}

export default App
