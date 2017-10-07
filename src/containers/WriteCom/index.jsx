import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import FormHead from '../../components/FormHead'
import Alert from '../../components/Alert'
import * as actions from '../../actions/booksinfo'
import './style.less'

class WriteCom extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            title: '',
            comment:'',
            alertShow:false,
            alertTitle:'',
            bookdata:{}
        }
    }
    render(){
        return (
            <div className="write-com">
                <FormHead title={this.state.title} />
                <div className="write-com-title">评价</div>
                <textarea onChange={(e) => this.saveCom(e)} className="write-textarea" name="" id="" cols="30" rows="10"></textarea>
                <input className="write-submit" type="button" value="提交" onClick={() => this.submitCom()} />
                {
                    this.state.alertShow
                    ? <Alert title={this.state.alertTitle} />
                    :''
                }
            </div>
            
        )
    }
    componentDidMount(){
        var booksinfo = this.props.booksinfo;
        booksinfo.forEach((item,i) => {
            if(item.id === this.props.params.id){
                this.setState({
                    title: item.title,
                    bookdata: item
                })
            }
        })
    }
    saveCom(e){
        this.setState({
            comment:e.target.value
        })
    }
    submitCom(){
        if(this.state.comment === ''){
            this.setState({
                alertShow: true,
                alertTitle: '输入不能为空'
            })
            this.hideAlert();
            return;
        }
        var arr = this.state.bookdata.comments;
        var myDate = new Date();
        var obj ={
            username: this.props.userinfo.username,
            time: myDate.toLocaleDateString(),
            content: this.state.comment
        }
        arr.push(obj);
        obj = {
            id: this.state.bookdata.id,
            comments: arr
        }
        fetch('http://localhost:8080/addComment',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
            body: `obj=${JSON.stringify(obj)}`
        }).then(res => 
            res.json()
        ).then(json => {
            if(json === 1) {
                var booksinfo = this.props.booksinfo;
                booksinfo.forEach((item,i) => {
                    if(item.id === this.props.params.id){
                        item.comments = arr;
                    }
                })
                this.props.actions.add({
                    booksinfo: booksinfo
                })
                hashHistory.push(`/detail/${this.state.bookdata.id}`)
            }
        }).catch(ex => {
            console.log('用户提交评论信息报错，',ex.message)
        })
    }
    hideAlert(){
        var _this = this;
        setTimeout(function(){
            _this.setState({
                alertShow:false
            })
        },800)
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
)(WriteCom)