import React, { PropTypes } from 'react'
import Mock from '../data/users.detail.mock.json'

const UserDetail = (props) => {

    let id = props.params.id
    let data = null;
    for ( let i = 0; !data && i < Mock.length; i++ )
        if ( Mock[i].ID === id )
            data = Mock[i];

    if ( !data )
        return <div><span>No user found</span></div>

    return (
        <div>
            <div><span>ID:</span><span>{data.ID}</span></div>
            <div><span>Nombre:</span><span>{data.nombre}</span></div>
            <div><span>Password:</span><span>{data.password}</span></div>
            <div><span>Gender:</span><span>{data.gender}</span></div>
            <div><span>Birthdate:</span><span>{data.birthdate}</span></div>
            <div><span>email:</span><span>{data.email}</span></div>
            <div><span>active:</span><span>{data.active?"SI":"NO"}</span></div>
        </div>
    )
}

export default UserDetail;
