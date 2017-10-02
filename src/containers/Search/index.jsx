import React from 'react'
import { hashHistory } from 'react-router'

import './style.less'

class Search extends React.Component {
    render() {
        return (
            <div>
                <div className="search-head">
                    <span onClick={() => this.changeRoute()} className="icon-chevron-left"></span>
                    <div className="home-inp">
                        <span className="icon-search"></span>
                        <input className="search-inp" type="search" placeholder="何所冬暖，何所夏凉" />
                    </div>
                </div>
                <div>
                    <div className="hot-title">
                        <span className="hot-title-left">大家热搜</span>
                        <span className="hot-title-right">换一批</span>
                    </div>
                    <div className="hot-list">
                        <ul>
                            <li>芈月传</li>
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
            </div>
        )
    }
    changeRoute(){
        // const routeName = this.props.location.search.slice(1,this.props.location.search.length);
        hashHistory.goBack();
    }
}

export default Search