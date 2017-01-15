import React, { Component, PropTypes } from 'react'

class TextBox extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf(['text', 'password']).isRequired
    }

    render() {
        return <input type={this.props.type} />
    }
}

export default TextBox
