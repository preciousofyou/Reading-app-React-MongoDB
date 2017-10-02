import React from 'react'
import { hashHistory } from 'react-router'

import './style.less'

class FormHead extends React.Component{
    render(){
        return (
            <div>
                <div className="login-head">
                    <span className="icon-chevron-left" onClick={(e) => this.changeRoute(e)}></span>
                    <span className="login-head-title">{this.props.title}</span>
                </div>
            </div>
        )
    }
    changeRoute() {
        hashHistory.goBack();
    }
}

export default FormHead