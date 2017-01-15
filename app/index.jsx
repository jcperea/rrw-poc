import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Login from './components/Login.jsx'
import UserList from './components/UserList.jsx'
import UserDetail from './components/UserDetail.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/users" component={UserList} />
    <Route path="/user/:id" component={UserDetail} />
  </Router>
), document.getElementById('app'))

