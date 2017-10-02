import React from 'react'
import { hashHistory } from 'react-router'

import '../util/reset.css'
import '../util/font.css'


class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
            
        )
    }
    componentDidMount() {
        hashHistory.push('/home');
    }
}

export default App