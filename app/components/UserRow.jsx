import React, { PropTypes } from 'react'

const UserRow = (props) => {
    return (
        <div>
            <div><span>ID:</span><span>{props.ID}</span></div>
            <div><span>Name:</span><span>{props.name}</span></div>
            <div><span>email:</span><span>{props.email}</span></div>
            <div><span>active:</span><span>{props.active}</span></div>
        </div>
    )

}

UserRow.propTypes = {
  ID: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired
};

export default UserRow;
