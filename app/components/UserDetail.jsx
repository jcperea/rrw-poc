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
  ID:           PropTypes.string.isRequired,
  nombre:       PropTypes.string.isRequired,
  password:     PropTypes.string.isRequired,
  lastname:     PropTypes.string.isRequired,
  gender:       PropTypes.oneOf(['hombre', 'mujer']).isRequired,
  birthdate:    PropTypes.string.isRequired,
  email:        PropTypes.string.isRequired,
  active:       PropTypes.bool.isRequired
};

export default UserDetail;
