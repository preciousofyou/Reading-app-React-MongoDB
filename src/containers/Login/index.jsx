import React from 'react'
import { hashHistory,Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FormHead from '../../components/FormHead'
import Alert from '../../components/Alert'
import * as actions from '../../actions/userinfo'


import './style.less'

class Login extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            username: '',
            password: '',
            alertShow:false,
            alertTitle: ''
        }
    }
    render(){
        return (
            <div>
                <FormHead title="登录" />
                <form className="login-content" onSubmit={(e) => this.submitHandle(e)}>
                    <div className="login-img"></div>
                    <div className="login-inp">
                        <div className="login-inp-common">
                            <label htmlFor="">账号</label>
                            <input type="text" placeholder="请输入账号" onChange={(e) => this.inpHandle(e)} name="username" />
                        </div>
                        <div className="login-inp-common">
                            <label htmlFor="">密码</label>
                            <input type="password" placeholder="请输入密码" onChange={(e) => this.inpHandle(e)} name="password" />
                        </div>
                    </div>
                    <div className="login-inp-submit">
                        <input type="submit" value="登录" />
                        <Link to="/reg" >
                            <input type="button" value="注册"  />
                        </Link>
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
    inpHandle(e) {
        switch(e.target.name){
            case 'username':
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
            default: break;
        }
    }
    getUserData() {
        fetch('http://localhost:8080/getUser',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
            body: `username=${this.state.username}&password=${this.state.password}`
        }).then(res => 
            res.json()
        ).then(json => {
            if(json){
                this.props.actions.add({
                    userinfo: json[0]
                })
                this.props.actions.update({
                    navIndex: 3
                })
                hashHistory.push('/user');
            }else {
                this.setState({
                    alertShow: true,
                    alertTitle:'密码错误'
                })
                this.hideAlert();
                return;
            }
        }).catch(ex => {
            console.log('获取用户信息报错，',ex.message)
        })
    }
    submitHandle(e) {
        e.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
            this.setState({
                alertShow: true,
                alertTitle:'输入不能为空'
            })
            this.hideAlert();
            return;
        }
        this.getUserData();
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions,dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)