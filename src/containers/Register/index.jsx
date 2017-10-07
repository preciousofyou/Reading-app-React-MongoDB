import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

import  FormHead from '../../components/FormHead'
import Alert from '../../components/Alert'
import * as actions from '../../actions/userinfo.js'

class Register extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            username: '',
            password:'',
            password1:'',
            alertShow: false,
            alertTitle:''
        }
    }
    render() {
        return (
            <div>
                <FormHead title="注册" />
                <form className="login-content" onSubmit={(e) => this.submitHandle(e)}>
                    <div className="login-img"></div>
                    <div className="login-inp">
                        <div className="login-inp-common">
                            <label htmlFor="">账号</label>
                            <input type="text" value={this.state.username} onChange={(e) => this.changeHandle(e)} placeholder="请输入账号" name="username" />
                        </div>
                        <div className="login-inp-common">
                            <label htmlFor="">密码</label>
                            <input type="password" value={this.state.password} onChange={(e) => this.changeHandle(e)} placeholder="请输入密码" name="password" />
                        </div>
                        <div className="login-inp-common">
                            <label htmlFor="">确认密码</label>
                            <input type="password" value={this.state.password1} onChange={(e) => this.changeHandle(e)} placeholder="请再次输入密码" name="password1" />
                        </div>
                    </div>
                    <div className="login-inp-submit">
                        <input type="submit" value="注册"  />
                    </div>
                </form>
                {
                    this.state.alertShow
                    ?<Alert title={this.state.alertTitle} />
                    :''
                }
            </div>
        )
    }
    changeHandle(e) {
        switch (e.target.name){
            case 'username':
                this.setState({
                    username: e.target.value
                })
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                })
                break;
            case 'password1':
                this.setState({
                    password1: e.target.value
                })
                break;
            default: break;
        }
    }
    submitHandle (e){
        e.preventDefault();
        var reg = /\s+/;
        if(this.state.username === '' || this.state.password === '' || this.state.password1 === ''){
            this.setState({
                alertShow:true,
                alertTitle:'输入不能为空'
            })
            this.hideAlert();
            return;
        }else if(this.state.password !== this.state.password1){
            this.setState({
                alertShow:true,
                alertTitle:'两次密码不一致'
            })
            this.hideAlert();
            return;
        }else if(this.state.password.length < 6){
            this.setState({
                alertShow:true,
                alertTitle:'密码不能少于六位数'
            })
            this.hideAlert();
            return;
        }else if(this.state.password.match(reg)){
            this.setState({
                alertShow:true,
                alertTitle:'密码中含有空格'
            })
            this.hideAlert();
            return;
        }   
        this.insertUserData();
    }
    insertUserData() {
        fetch('http://localhost:8080/insertUser',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
            body: `username=${this.state.username}&password=${this.state.password}`
        }).then(res => 
            res.json()
        ).then(json => {
            if(json === 1){
                this.props.actions.add({
                    userinfo: {
                        username: this.state.username,
                        password: this.state.password,
                        shelf: []
                    }
                })
                this.props.actions.update({
                    navIndex: 3
                })
                hashHistory.push('/user');
            }
        }).catch(ex => {
            console.log('用户存入用户信息报错，',ex.message)
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators( actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
