import React from 'react'

import './style.less'

class Alert extends React.Component {
    render() {
        return (
            <div className="alert">{this.props.title}</div>
        )
    }
}

export default Alert
