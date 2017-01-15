import React, { Component } from 'react'
import UserRow from './UserRow.jsx'
import Mock from '../data/users.mock.json'


class UserList extends Component {

    // static UserRow loading as a first step
    render() {
        return (
            <div style={{ margin: '0 auto', width: '30em' }}>
            {Mock.map(user => <UserRow ID={user.ID} name={user.name} email={user.email} active={user.active} />)}
            </div>
        )
    }
}

export default UserList
