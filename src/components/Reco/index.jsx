import React from 'react'
import { Link } from 'react-router'

import './style.less'

class Reco extends React.Component {
    render() {
        return (
            <Link to={"/detail/" + this.props.obj.id } >
            <li className="reco">
                <div className="left-img"><img src={this.props.obj.img} alt="" /></div>
                <div className="detail">
                    <h4 className="title">{this.props.obj.title}</h4>
                    <p>{this.props.obj.intro}</p>
                    <div className="detail-info">
                        <span className="author">{this.props.obj.author}</span>
                        {/* <span className="class">{this.props.obj.type}</span> */}
                        <span className="point">{this.props.obj.point}分</span>
                    </div>
                </div>
            </li>
            </Link>
        )
    }
}
export default Reco
