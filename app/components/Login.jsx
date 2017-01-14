import React, { Component, PropTypes } from 'react'
import Button from './Button.jsx'
import TextBox from './TextBox.jsx'

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>Login: <TextBox type="text" /></label>
                </div>
                <div>
                    <label>Password: <TextBox type="password" /></label>
                </div>
                <div>
                    <Button value="Enviar" />
                </div>
            </div>
        )
    }
}

export default Login
