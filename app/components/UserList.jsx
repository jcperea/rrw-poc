import React, { Component, PropTypes } from 'react'
import UserRow from './UserRow.jsx'

class UserList extends Component {

    // static UserRow loading as a first step
    render() {
        return (
            <div style={{ margin: '0 auto', width: '30em' }}>
                <UserRow ID="1" name="Jose" email="jose@carlos.es" active={true}/>
                <UserRow ID="2" name="Jose" email="jose@carlos.es" active={true}/>
                <UserRow ID="3" name="Jose" email="jose@carlos.es" active={true}/>
                <UserRow ID="4" name="Jose" email="jose@carlos.es" active={false}/>
                <UserRow ID="5" name="Jose" email="jose@carlos.es" active={false}/>
            </div>
        )
    }
}

export default UserList
