import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './components/Login.jsx'
import UserList from './components/UserList.jsx'
import UserDetail from './components/UserDetail.jsx'
import reducer from './reducers'

const store = createStore(reducer)

render((

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/users" component={UserList} />
            <Route path="/user/:id" component={UserDetail} />
        </Router>
    </Provider>

), document.getElementById('app'))

