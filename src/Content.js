import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import Main from './main'
import JobsNow from './pages/JobsNow'
import Nyx from './pages/Nyx'
import Scroll from './Scroll.js'

export default props => (
  <div>
    {' '}
    <div className="content">
      {' '}
      {/* <NavBar toggle={props.toggle} /> */}{' '}
      <Switch>
        <Scroll>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/jobsnow" component={() => <JobsNow />} />
          <Route exact path="/nyxnews" component={() => <Nyx />} />
        </Scroll>
        {/* projects pages */}
      </Switch>
    </div>
  </div>
)
