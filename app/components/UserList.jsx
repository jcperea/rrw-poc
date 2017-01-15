import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../actions'
import UserRow from './UserRow.jsx'
import Mock from '../data/users.mock.json'

// components
let FilterLink = ({ isActive, text, onClick }) => {
    if (isActive) {
        return <span>{text}</span>
    }

    return <a href="#" onClick={e => { e.preventDefault(); onClick(); }} >{text}</a>
}

class UserList extends Component {

    static propTypes = {
        users: PropTypes.arrayOf(
            PropTypes.shape({
                ID: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                active: PropTypes.bool.isRequired
            }).isRequired).isRequired,
    }

    render() {
        return (
            <div style={{ margin: '0 auto', width: '30em' }}>
                <FilterLink filter="ACTIVE" text="SOLO USUARIOS ACTIVOS"/>{" -- "}<FilterLink filter="ALL" text="TODOS LOS USUARIOS"/>
                {this.props.users.map(user => <UserRow key={user.ID} {...user} />)}
            </div>
        )
    }
}

UserList.defaultProps = {users: Mock};





// utils
const getUsers = (users, filter) => {
    switch (filter) {
        case 'ALL':
            return users
        case 'ACTIVE':
            return users.filter(user => user.active)
        default:
            return users
    }
}

const updateFilterActive = (state, props) => ({
    isActive: props.filter == state
})

const updateDispatch = (dispatch, props) => ({
    onClick: () => {
        dispatch(setFilter(props.filter))
    }
})

const updateUserList = (state, props) => ({
    users: getUsers(Mock, state)
})



// redux connections
FilterLink = connect(updateFilterActive, updateDispatch)(FilterLink)
UserList   = connect(updateUserList)(UserList)

export default UserList
