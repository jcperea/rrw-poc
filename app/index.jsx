import React from 'react'
import {render} from 'react-dom'
import Login from './components/Login.jsx'
import UserList from './components/UserList.jsx'

class App extends React.Component {
  render () {
    return <div><Login /><UserList/ ></div>
  }
}

render(<App/>, document.getElementById('app'));
