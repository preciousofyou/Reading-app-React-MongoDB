import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

import FormHead from '../../components/FormHead'
import Alert from '../../components/Alert'
import * as actions from '../../actions/userinfo'

class UpdatePassword extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            oldpass:'',
            newpass:'',
            newpass1:'',
            alertShow:false,
            alertTitle: ''
        }
    }
    render() {
        return (
            <div>
                <FormHead title="修改密码" />
                <form className="login-content" onSubmit={(e) => this.submitHandle(e)}>
                    <div className="login-img"></div>
                    <div className="login-inp">
                        <div className="login-inp-common">
                            <label htmlFor="">旧密码</label>
                            <input type="password" placeholder="请输入原来的密码" onChange={(e) => this.inpHandle(e)} name="oldpass" />
                        </div>
                        <div className="login-inp-common">
                            <label htmlFor="">新密码</label>
                            <input type="password" placeholder="请输入新密码" onChange={(e) => this.inpHandle(e)} name="newpass" />
                        </div>
                        <div className="login-inp-common">
                            <label htmlFor="">确认密码</label>
                            <input type="password" placeholder="请再次输入新密码" onChange={(e) => this.inpHandle(e)} name="newpass1" />
                        </div>
                    </div>
                    <div className="login-inp-submit">
                        <input type="submit" value="提交" />
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
    submitHandle(e) {
        e.preventDefault();
        if(this.state.oldpass !== '' && this.state.oldpass !== this.props.userinfo.password){
            this.setState({
                alertShow:true,
                alertTitle:'旧密码错误'
            })
            this.hideAlert();
            return;
        }else if(this.state.oldpass === '' || this.state.newpass === '' || this.state.newpass1 === ''){
            this.setState({
                alertShow:true,
                alertTitle:'输入不能为空'
            })
            this.hideAlert();
            return;
        }else if(this.state.newpass !== this.state.newpass1){
            this.setState({
                alertShow:true,
                alertTitle:'两次新密码不一致'
            })
            this.hideAlert();
            return;
        }
        this.updateUserData();
    }
    updateUserData() {
        fetch('http://localhost:8080/updateUser',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
            body: `username=${this.props.userinfo.username}&newpass=${this.state.newpass}`
        }).then(res => 
            res.json()
        ).then(json => {
            if(json === 1){
                // this.setState({
                //     alertShow:true,
                //     alertTitle:'修改成功'
                // })
                // this.hideAlert();
                this.props.actions.add({
                    userinfo: {
                        username: this.props.userinfo.username,
                        password: this.state.newpass
                    }
                })
                hashHistory.push('/user');
            }
        }).catch(ex => {
            console.log('获取用户信息报错，',ex.message)
        })
    }
    inpHandle(e) {
        switch(e.target.name){
            case 'oldpass':
                this.setState({
                    oldpass: e.target.value
                })
                break;
            case 'newpass':
                this.setState({
                    newpass: e.target.value
                })
                break;
            case 'newpass1':
                this.setState({
                    newpass1: e.target.value
                })
                break;
            default: break;
        }
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
)(UpdatePassword)