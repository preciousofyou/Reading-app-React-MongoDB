import React from 'react'
import { hashHistory } from 'react-router'

import './style.less'

class Header extends React.Component{
    render(){
        return (
            <div className="home-head" id="home-head">
                <div className="home-inp">
                    <span className="icon-search"></span>
                    <input onFocus={() => this.changeRoute()} className="search-inp" type="search" placeholder="搜索书城/书架图书" />
                </div>
            </div>
        )
    }
    changeRoute(){
        hashHistory.push('/search');
    }
}

export default Header