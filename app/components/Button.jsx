import React, { Component, PropTypes } from 'react'

class Button extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        value: PropTypes.string.isRequired
    }

    render() {
        return <button>{this.props.value}</button>
    }
}

export default Button
