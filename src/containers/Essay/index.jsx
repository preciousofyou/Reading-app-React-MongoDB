import React from 'react'
import { hashHistory,Link } from 'react-router'
import { connect } from 'react-redux'

import './style.less'

class Essay extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            chapter: 0,
            isShow: false,
            bookdata: {},
            id: 0
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.isShow
                    ?<div>
                        <div className="essay-head">
                            <span className="icon-chevron-left" onClick={() => this.backRoute()}></span>
                            <span className="essay-title">{this.state.bookdata.catalog[this.state.chapter]}</span>
                            <Link to={"/catalog/"+ this.state.id + '/' + this.state.chapter}>
                                <span className="catalog">目录</span>
                            </Link>
                        </div>
                        <div className="essay-footer">
                            <ul>
                                <li className="essay-prev" onClick={() => this.changeChapter(0)}>上一章</li>
                                <li className="essay-next" onClick={() => this.changeChapter(1)}>下一章</li>
                            </ul>
                        </div>
                    </div>
                    :''
                }
                
                <div className="essay-content" onClick={() => this.changeShow()}>
                {
                    this.state.bookdata
                    ?
                    this.state.bookdata.contents[this.state.chapter].content.map((item,i) => {
                        return <p key={i}>{item}</p>
                    })
                    :''
                }
                </div>
                
            </div>
        )
    }
    componentWillMount(){
        if(this.props.params.id){
            this.setState({
                chapter: parseInt(this.props.params.chapter,10),
                id: this.props.params.id
            })
            const id = this.props.params.id
            var _this = this
            this.props.booksinfo.forEach((item,i) => {
                if(item.id === id){
                    _this.setState({
                        bookdata : item
                    })
                }
            })
        }
        
    }
    backRoute(){
        hashHistory.push(`/catalog/${this.state.id}/${this.state.chapter}`);
    }
    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    changeChapter(n){
        if(n === 0){
            if(this.state.chapter === 0) return 
            this.setState({chapter: this.state.chapter-1})
        }else{
            if(this.state.chapter === this.state.bookdata.catalog.length-1) return
            
            this.setState({chapter: this.state.chapter+1})
        }
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
)(Essay)