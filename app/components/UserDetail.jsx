import React, { PropTypes } from 'react'

const UserDetail = (props) => {
    return (
        <div>
            <div><span>ID:</span><span>{props.ID}</span></div>
            <div><span>Nombre:</span><span>{props.nombre}</span></div>
            <div><span>Password:</span><span>{props.password}</span></div>
            <div><span>Gender:</span><span>{props.gender}</span></div>
            <div><span>Birthdate:</span><span>{props.birthdate}</span></div>
            <div><span>email:</span><span>{props.email}</span></div>
            <div><span>active:</span><span>{props.active?"SI":"NO"}</span></div>
        </div>
    )
}

UserDetail.propTypes = {
  ID:           React.PropTypes.string.isRequired,
  nombre:       React.PropTypes.string.isRequired,
  password:     React.PropTypes.string.isRequired,
  lastname:     React.PropTypes.string.isRequired,
  gender:       React.PropTypes.oneOf(['hombre', 'mujer']).isRequired,
  birthdate:    React.PropTypes.string.isRequired,
  email:        React.PropTypes.string.isRequired,
  active:       React.PropTypes.bool.isRequired
};

export default UserDetail;
