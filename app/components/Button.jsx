import React, { Component, PropTypes } from 'react'

class Button extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        value: PropTypes.string.isRequired
    }

    render() {
        return <input type="submit" value={this.props.value} />
    }
}

export default Button
