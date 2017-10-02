import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.less'

import * as actions from '../../actions/mainnav'

class MainNav extends React.Component {
    render() {
        return (
            <div className="home-main-nav">
                <ul>
                    <li className={this.props.navIndex === 0? "active": ''}>
                        <Link onClick={() => this.changeIndex(0)} to="/shelf">
                            <p className="icon-map-marker"></p>
                            <span>书架</span>
                        </Link>
                    </li>
                    <li className={this.props.navIndex === 1? "active": ''}>
                        <Link onClick={() => this.changeIndex(1)} to="/home">
                            <p className="icon-star-o"></p>
                            <span>精选</span>
                        </Link>
                    </li>
                    <li className={this.props.navIndex === 2? "active": ''}>
                        <Link onClick={() => this.changeIndex(2)} to="/classify">
                            <p className="icon-tablet"></p>
                            <span>分类</span>
                        </Link>
                    </li>
                    <li className={this.props.navIndex === 3? "active": ''}>
                        <Link onClick={() => this.changeIndex(3)} to="/user">
                            <p className="icon-user"></p>
                            <span>我</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    changeIndex(index) {
        this.props.actions.update({navIndex:index});
    }
}

const mapStateToProps = (state) => {
    return {
        navIndex: state.mainnav.navIndex
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
)(MainNav)