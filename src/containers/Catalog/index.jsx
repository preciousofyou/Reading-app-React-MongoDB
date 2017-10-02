import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './style.less'

class Catalog extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            curChapter: 0,
            id: 0
        }
    }
    render() {
        const id = this.props.params.id
        var bookdata = {}
        this.props.booksinfo.forEach((v,i) => {
            if(v.id === id){
                bookdata = v
            }
        })
        return ( 
            <div>
                <div className="catalog-head">
                    <span className="icon-chevron-left" onClick={() => this.backRoute()}></span>
                    <span className="catalog-head-title">目录</span>
                    <span className="title">{bookdata.title}</span>
                </div>
                <div className="catalog-content">
                    <ul>
                    {
                        bookdata.catalog.map((item,i) => {
                            return <Link key={i} to={"/essay/"+ id + '/'+ i}><li className={this.state.curChapter === i?'active':''} onClick={() => this.changeChapter(i)}>{item}</li></Link>
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            curChapter: parseInt(this.props.params.chapter,10),
            id: this.props.params.id
        })
    }
    
    backRoute() {
        hashHistory.push(`/detail/${this.state.id}`);
    }
    changeChapter(i){
        this.setState({
            curChapter: i
        })
    }
}

const mapStateToProps = (state) => {
    return {
        booksinfo: state.booksinfo.booksinfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog)