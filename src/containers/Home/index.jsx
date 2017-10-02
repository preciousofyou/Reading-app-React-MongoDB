import React from 'react'

import MainNav from '../../components/MainNav'

class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <MainNav />
            </div>
            
        )
    }
}

export default Home