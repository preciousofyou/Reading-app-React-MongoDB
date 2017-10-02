import React from 'react'
import { Link,hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FormHead from '../../components/FormHead'
import * as actions  from '../../actions/userinfo'

import './style.less'

class Setting extends React.Component {
    render(){
        return (
            <div>
                <FormHead title="设置" />
                <Link to="/upassword">
                    <div className="set-list-common set-list-first">
                        <span className="icon-tablet"></span>
                        <span className="set-list-title">修改密码</span>
                        <span className="set-list-right">></span>
                    </div>
                </Link>
                <div className="set-list-common" onClick={() => this.dropOut()}>
                    <span className="icon-tablet"></span>
                    <span className="set-list-title">退出账号</span>
                    <span className="set-list-right">></span>
                </div>
            </div>
        )
    }
    dropOut(){
        this.props.actions.del({
            
        })
        hashHistory.push('/user');
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting)