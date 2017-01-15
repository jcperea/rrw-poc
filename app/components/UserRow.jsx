import React, { PropTypes } from 'react'

const UserRow = (props) => {
    return (
        <div style={{border: '1px solid black', marginBottom: '10px', width: '30em', cursor: 'pointer'}}>
            <div><span>ID:</span><span>{props.ID}</span></div>
            <div><span>Name:</span><span>{props.name}</span></div>
            <div><span>email:</span><span>{props.email}</span></div>
            <div><span>active:</span><span>{props.active?'SI':'NO'}</span></div>
        </div>
    )

}

UserRow.propTypes = {
  ID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default UserRow;
