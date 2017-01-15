import React, { Component } from 'react'
import Button from './Button.jsx'
import TextBox from './TextBox.jsx'
import $ from 'jquery'
import { browserHistory } from 'react-router'



class Login extends Component {

    contextTypes: {
        router: React.PropTypes.object
    }

    doLogin(event) {
        event.preventDefault()
        $.ajax({
            url: 'login',
            type: 'POST',
            data: {
                user: $(event.target).find('input')[0].value,
                pass: $(event.target).find('input')[1].value
            },
            success: function( ) {
                browserHistory.push('users')
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.doLogin}>
                <div>
                    <label>Login: <TextBox type="text" /></label>
                </div>
                <div>
                    <label>Password: <TextBox type="password" /></label>
                </div>
                <div>
                    <Button value="Enviar" />
                </div>
            </form>
        )
    }
}

export default Login
