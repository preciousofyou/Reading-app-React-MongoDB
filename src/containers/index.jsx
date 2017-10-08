import React from 'react'

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
}

export default App
