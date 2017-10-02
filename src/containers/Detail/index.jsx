import React from 'react'
import { hashHistory,Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.less'

import * as actions from '../../actions/userinfo'

class Detail extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            addShelf: false,
            id: 0
        }
    }
    render() {
        var id = this.props.params.id;
        var bookdata = {};
        this.props.booksinfo.forEach((v,i) => {
            if(v.id === id){
                bookdata = v;
            }
        })
        return (
            <div>
                <div className="detail-head">
                    <span className="icon-chevron-left" onClick={(e) => this.changeRoute(e)}></span>
                    <span className="detail-head-title">书籍详情</span>
                    <Link to="/search">
                        <span className="icon-search"></span>
                    </Link>
                </div>
                <div className="detail-pic"  ref={node => this.node = node}>
                    <img src={bookdata.img} alt="" />
                    <div className="detail-pic-data">
                        <h4 className="detail-pic-title">{bookdata.title}</h4>
                        <span className="detail-pic-score">{bookdata.point}分 |</span>
                        <span className="detail-pic-num"> 1142人评分</span> 
                        <p className="detail-pic-author">{bookdata.author}</p>
                        <del className="detail-pic-old">{bookdata.old_price}阅饼</del>
                        <p className="detail-pic-new">{bookdata.price}阅饼</p>
                    </div>
                </div>
                <div className="detail-discribe">
                    <p>{bookdata.intro}</p>
                    {
                        bookdata.label.map((item,i) => {
                            return <span key={i}>#{item}</span>
                        })
                    }
                </div>
                <Link to={"/catalog/"+ bookdata.id + '/0'}>
                    <div className="check-catalog">
                        <span className="check-catalog-title">查看目录：共{bookdata.catalog.length}章</span>
                        <span className="check-catalog-right">></span>
                    </div>
                </Link>
                <div className="detail-comment">
                    <p className="detail-comment-title">图书评价</p>
                    <div>
                        <ul>
                            {
                                bookdata.comments.map((item,i) => {
                                    return <li key={i}>
                                                <div className="detail-comment-head"><img src="" alt="" /></div>
                                                <span className="detail-comment-name">{item.username}</span>
                                                <span className="detail-comment-time">{item.time}</span>
                                                <p>{item.content}</p>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="detail-skip-allcom">全部评论<span>{bookdata.comments.length}</span></div>
                </div>
                <div className="may-like">
                    <p className="may-like-title">喜欢这本书的人也喜欢</p>
                    <ul>
                        <li>
                            <img src="http://localhost:8080/images/book/pic3.jpg" alt="" />
                            <p>仕途天骄</p>
                        </li>
                        <li>
                            <img src="http://localhost:8080/images/book/pic6.jpg" alt="" />
                            <p>天咒</p>
                        </li>
                        <li>
                            <img src="http://localhost:8080/images/book/pic7.jpg" alt="" />
                            <p>大明海枭</p>
                        </li>
                    </ul>
                </div>
                <div className="more-detail">
                    <p className="more-detail-title">图书更多信息</p>
                    <p>字数：{bookdata.words}</p>
                    <p>上架：{bookdata.grounding_time}</p>
                    <p>出版：{bookdata.company}</p>
                    <p>书号：{bookdata.id}</p>
                    <p>免责声明：</p>
                    <p>本书数字版权由{bookdata.company}提供，并由其授权掌阅科技股份有限公司制作发行，若书中
                        含有不良信息，请书友积极告知客服。
                    </p>
                </div>
                <div className="detail-nav">
                    {
                        this.state.addShelf
                        ?<div className="add-to-shelf">
                            <p className="add-already">✔</p>
                            <p className="add-already">已在书架</p>
                        </div>
                        :<div className="add-to-shelf">
                            <p className="icon-star"></p>
                            <p onClick={() => this.addToShelf()}>加入书架</p>
                        </div>
                    }
                    <div className="read-to">
                        <p className="icon-star-o"></p>
                        <Link to={"/essay/"+ id + '/0'}>
                            <p>立即阅读</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.node.scrollIntoView();
        this.setState({
            id: this.props.params.id
        })
        
        if(this.props.userinfo && this.props.userinfo.shelf.indexOf(this.props.params.id) !== -1){
            this.setState({
                addShelf: true
            })
        }
    }
    changeRoute(){
        hashHistory.push('/home');
    }
    addToShelf(i){
        if(!this.props.userinfo){
            hashHistory.push('/login');
            return;
        }
        this.setState({
            addShelf: true
        })
        var arr = this.props.userinfo.shelf.slice(0);
        if(this.props.userinfo.shelf.indexOf(this.state.id) !== -1 ) return
        arr.push(this.state.id);
        var  obj = {
            username: this.props.userinfo.username,
            password: this.props.userinfo.password,
            shelf: arr
        }
        this.addBookData(obj)
    }
    addBookData(obj){
        fetch('http://localhost:8080/addBookToShelf',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
            body: `obj=${JSON.stringify(obj)}`
        }).then(res => 
            res.json()
        ).then(json => {
            if(json.ok === 1){
                this.props.actions.add({
                    userinfo:obj
                })
            }
        }).catch(ex => {
            console.log('用户加入书架信息报错，',ex.message)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        booksinfo: state.booksinfo.booksinfo,
        userinfo: state.userinfo.userinfo
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
)(Detail)