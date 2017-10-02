import React from 'react'
import { hashHistory,Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.less'
import * as actions from '../../actions/userinfo'

class BookShelf extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            data : [],
            inpShow: false,
            bookNum: 0,
            checked: true,
            titles: [],
            ids: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.inpShow
                    ?<div className="shelf-head">
                        <span className="shelf-head-edit" onClick={() => this.showCheckbox()}>取消</span>
                        <span className="shelf-head-title">已选<span>{this.state.bookNum}</span>本书</span>
                        <span className="shelf-head-all shelf-head-right" onClick={() =>this.del()}>删除</span>
                    </div>
                    :<div className="shelf-head">
                        <span className="shelf-head-edit" onClick={() =>this.showCheckbox()}>编辑</span>
                        <span className="shelf-head-title">阅读</span>
                        <span onClick={() => this.changeRoute()} className="icon-search shelf-head-right"></span>
                    </div>
                }
                <div className="shelf-content">
                    <ul>
                        {
                            this.props.userinfo
                            ?
                            this.state.data.map((item,i) => {
                                return (<li key={i}>
                                    {this.state.inpShow
                                    ?<span>
                                        <div className="shelf-content-list">{item}</div>
                                        <input title={item} className="shelf-content-checkbox" onChange={(e) => this.addChecked(e)} type="checkbox" />
                                    </span>
                                    :<Link to={"/essay/"+ this.state.ids[i] + '/0' } >
                                        <div className="shelf-content-list">{item}</div>
                                    </Link>
                                }</li>)
                            })
                            : <Link to="/login" className="not-loged"><li>你还没登录呢</li></Link>
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var arr = [];
        var arr1 = [];
        if(this.props.userinfo){
             for(var j = 0; j<this.props.booksinfo.length; j++){
                for(var i = 0; i<this.props.userinfo.shelf.length; i++){
                    if(this.props.booksinfo[j].id === this.props.userinfo.shelf[i]){
                        arr.push(this.props.booksinfo[j].title);
                        arr1.push(this.props.booksinfo[j].id);
                    }
                }  
            } 
            this.setState({
                data: arr,
                ids: arr1
            })
        }
    }
    showCheckbox() {
        this.setState({
            inpShow: !this.state.inpShow
        })
    }
    changeRoute(){
        hashHistory.push('/search');
    }
    addChecked(e) {
        var arr = this.state.titles;
        if(e.target.checked){
            arr.push(e.target.title);
            this.setState({
                bookNum: this.state.bookNum+1,
                titles: arr
            })
        }else{
            arr.splice(arr.indexOf(e.target.title),1)
            this.setState({
                bookNum: this.state.bookNum-1,
                titles: arr
            })
        }
    }
    del(){
        var arr = [];
        this.setState({
            data: this.state.titles
        })
        for( var i=0;i<this.state.titles.length;i++){
            this.props.booksinfo.forEach((item,j)=>{
                if(item.title === this.state.titles[i]){
                    arr.push(item.id);
                }
            })
        }
        //arr为id群
        var shelf = this.props.userinfo.shelf;
        arr.forEach((v,i)=>{
            shelf.splice(shelf.indexOf(v),1);
        })
        var  obj = {
            username: this.props.userinfo.username,
            password: this.props.userinfo.password,
            shelf: shelf
        }
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
            console.log('用户删除书架信息报错，',ex.message)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo.userinfo,
        booksinfo: state.booksinfo.booksinfo
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
)(BookShelf)