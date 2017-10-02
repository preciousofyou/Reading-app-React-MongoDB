import React from 'react'
import { hashHistory,Link } from 'react-router'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './style.less'

// import * as actions from '../../actions/actions'


class User extends React.Component {
    render() {
        return (
            <div>
                <div className="user-head">
                    <span>我</span>
                </div>
                <div className="user-login">
                    <div className="user-head-img"></div>
                    {
                        this.props.userinfo
                        ?<p>{this.props.userinfo.username}</p>
                        :<p onClick={() => this.changeRoute()}>
                            你这么能，你咋不登录呢？
                        </p>
                    }
                </div>
                {
                    this.props.userinfo
                    ?<Link to="/set"><div className="user-setting">
                        <span className="icon-key"></span>
                        <span className="user-setting-title">设置</span>
                        <span className="user-setting-right">></span>
                    </div></Link>
                    :''
                }
            </div>
        )
    }
    changeRoute(){
        hashHistory.push('/login');
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo.userinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)