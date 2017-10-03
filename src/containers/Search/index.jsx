import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import './style.less'
import Reco from '../../components/Reco'

class Search extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            value: '',
            data: [],
            isShow: false
        }
    }
    render() {
        return (
            <div>
                <div className="search-head">
                    <span onClick={() => this.changeRoute()} className="icon-chevron-left"></span>
                    <div className="home-inp">
                        <span className="icon-search"></span>
                        <input className="search-inp" type="text" onFocus={() => this.focusHandle()} onChange={(e) => this.changeHandle(e)} onKeyUp={(e) => this.keyHandle(e)} placeholder="何所冬暖，何所夏凉" />
                    </div>
                </div>
                {
                    this.state.isShow
                    ? <div>
                        <div className="hot-title">
                            <span className="hot-title-left">大家热搜</span>
                            <span className="hot-title-right">换一批</span>
                        </div>
                        <div className="hot-list">
                            <ul>
                                <li>他的国</li>
                                <li>重生</li>
                                <li>总裁老婆</li>
                                <li>兽宠萌妃</li>
                                <li>穿越狂妃</li>
                                <li>逆天腰带</li>
                                <li>宠婚</li>
                                <li>黑道男友</li>
                                <li>伪装者</li>
                            </ul>
                        </div>
                    </div>
                    :''
                }
                {
                    this.state.data.length
                    ?this.state.data.map((item,i)=> {
                        return <Reco key={i} obj={item}/>
                    })
                    :''
                }
                
            </div>
        )
    }
    focusHandle(){
        this.setState({
            isShow: true
        })
    }
    changeRoute(){
        hashHistory.goBack();
    }
    changeHandle(e){
        this.setState({
            value: e.target.value
        })
    }
    keyHandle(e){
        if(e.keyCode!==13) return;
        this.setState({
            isShow: false
        })
        this.getDataList(this.state.value);
    }
    getDataList(value){
        var arr = [];
        this.props.booksinfo.forEach((item,i)=>{
            if(item.title.indexOf(value) !== -1){
                arr.push(item);
            }
        })
        this.setState({
            data:arr
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
)(Search)
