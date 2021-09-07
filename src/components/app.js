import { h } from 'preact'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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

  return (
    <div
      id="app"
      onWheel={(e) => {
        if (
          e.pageY - e.clientY <= 600 ||
          (scroll <= 600 && e.pageY - e.clientY > 600)
        )
          setScroll(e.pageY - e.clientY);
      }}
    >
      <LanguageProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home scroll={scroll} />
            </Route>
            <Route path="/project/:project" children={({ match }) => <Project scroll={scroll} project={match.params.project} />} />
          </Switch>
        </Router>
      </LanguageProvider>
      <GoTopButton scroll={scroll} />
    </div>
  );
}

export default App
