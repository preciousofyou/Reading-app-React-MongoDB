import React from 'react'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './style.less'

import Header from '../../components/Header'
import Reco from '../../components/Reco'
import * as actions from '../../actions/booksinfo.js'

class Choice extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            bannerData: [],
            curIndex: 0,
            curNav: 0,
            data: [
                {
                    img: 'http://localhost:8080/images/book/pic_1.jpg',
                    title: '女总裁的全能保镖',
                    intro:'退役后的唐林军不想当鸭子，更不想去洗盘子，所以为了生活，他只能开了一家私家侦探事务所。婚外情调查，子女课外监护、安保、讨债...',
                    author: '桃子卖没了',
                    type:'言情小说',
                    point: '7.9'
                },
                {
                    img: 'http://localhost:8080/images/book/pic_2.jpg',
                    title: '鉴宝大宗师',
                    intro:'钱？我有！美女？不缺！地位？等等，地位是什么？在华夏国，我富可敌国，坐拥百分之八十的珍奇异宝，每天请安的美女如云，这算地位吗？',
                    author: '不起泡的啤酒',
                    type:'都市言情',
                    point: '6.5'
                },
                {
                    img: 'http://localhost:8080/images/book/pic_3.jpg',
                    title: '天才高手在都市',
                    intro:'会点小武功，懂点小医术，有点不要脸，少年秋羽来到大都市充当校花保镖，他能否守身如玉，继续纯洁……',
                    author: '冷云邪神',
                    type: '言情小说',
                    point: '9.5'
                }
            ],
            item: ['精选','出版','男生','女生','漫画'],
            booksData: []
        }
    }
    render() {
        const opt={
            auto: 2000,
            callback: curIndex => this.setState({curIndex})
        }
        return (
            <div>
                <Header />
                <div className="home-nav" id="home">
                    <ul>
                        {
                            this.state.item.map((item,i) => {
                                return <li key={i} className={this.state.curNav === i?'home-nav-active':''}><span onClick={() => {this.changeNav(i)}}>{item}</span></li>
                            })
                        }
                    </ul>
                </div>
                <div className="home-banner">
                    {
                        this.state.bannerData.length
                        ?<ReactSwipe swipeOptions={opt}>
                        {
                            this.state.bannerData[this.state.curNav].banner.map(function(item,i){
                                return <div key={i} className="banner-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                            })
                        }
                        </ReactSwipe>
                        : <h2>正在加载...</h2>
                    }
                    <div className="banner-list">
                        <ul className="banner-dots">
                        {
                            this.state.bannerData.map((item,i)=>{
                                const bannerclass = this.state.curIndex === i ? 'banner-dot-active' : '';
                                return <li key={i} className={"banner-dot "+ bannerclass }></li>
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="sub-nav-list">
                    <ul>
                        {
                            this.state.bannerData.length
                            ? this.state.bannerData[this.state.curNav].list.map((item,i) => {
                                return <li key={i}>
                                    <img src={`http://localhost:8080/images/icon/${i}.png`} alt="" />
                                    <span>{item}</span>
                                </li>
                            })
                            :''
                        }
                    </ul>
                </div>
                <div className="home-ad">
                    {
                        this.state.bannerData.length
                        ? this.state.bannerData[this.state.curNav].ad_list.map((item,i)=> {
                            return (
                                <div key={i} className={i===0?'home-ad-left':'home-ad-right'}>
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <img src={item.img} alt="" />
                                </div>
                            )
                        })
                        :''
                    }
                </div>
                <div className="home-class">
                    <div className="home-class-top">
                        <div className="home-class-top-left">
                            <h4>男生小说</h4>
                            <p>
                                <a>都市</a>
                                <a>玄幻</a>
                                <a>仙侠</a>
                                <a>历史</a>
                            </p>
                            <img src="http://localhost:8080/images/ad/ad1.jpg" alt="" />
                        </div>
                        <div className="home-class-top-right">
                            <h4>女生小说</h4>
                            <p>
                                <a>总裁</a>
                                <a>豪门</a>
                                <a>穿越</a>
                                <a>重生</a>
                            </p>
                            <img src="http://localhost:8080/images/ad/ad2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="home-class-bottom">
                        <ul>
                            <li>
                                <h4>出版</h4>
                                <p>热门关注</p>
                                <img src="http://localhost:8080/images/ad/ad_1.jpg" alt="" />
                            </li>
                            <li>
                                <h4>漫画</h4>
                                <p>高颜彩漫</p>
                                <img src="http://localhost:8080/images/ad/ad_2.jpg" alt="" />
                            </li>
                            <li>
                                <h4>灵异</h4>
                                <p>鬼话连篇</p>
                                <img src="http://localhost:8080/images/ad/ad_3.jpg" alt="" />
                            </li>
                            <li>
                                <h4>玄幻</h4>
                                <p>废材崛起</p>
                                <img src="http://localhost:8080/images/ad/ad_4.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-common">
                    <div className="head">
                        <span>查看更多 ></span>
                        <h4>限时特价</h4>
                    </div>
                    <div className="content">
                        <ul>
                            
                            {
                                this.state.booksData.length
                                ?this.state.booksData.map((item,i) => {
                                    return <Link to={"/detail/" + item.id} key={i}>
                                        <li>
                                            <img src={item.img} alt="" />
                                            <p className="title">{item.title}</p>
                                            <p className="num">{item.price}阅饼</p>
                                            <del className="old-num">{item.old_price}阅饼</del>
                                        </li>
                                    </Link>
                                })
                                :''
                            }
                        </ul>
                    </div>
                </div>
                <div className="home-common">
                    <div className="head">
                        <span>查看更多 ></span>
                        <h4>限时特价</h4>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <img src="http://localhost:8080/images/book/pic4.jpg" alt="" />
                                <p className="title">怪盗神医</p>
                                <p className="num">4999阅饼</p>
                                <del className="old-num">21110阅饼</del>
                            </li>
                            <li>
                                <img src="http://localhost:8080/images/book/pic5.jpg" alt="" />
                                <p className="title">冒牌道士</p>
                                <p className="num">1899阅饼</p>
                                <del className="old-num">4200阅饼</del>
                            </li>
                            <li>
                                <img src="http://localhost:8080/images/book/pic6.jpg" alt="" />
                                <p className="title">天咒</p>
                                <p className="num">599阅饼</p>
                                <del className="old-num">1200阅饼</del>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-another-common">
                    <ul>
                        {
                            this.state.data.map((item,i) => {
                                return <Reco key={i} obj={item} />
                            })
                        }
                    </ul>
                </div>
                <div className="home-common">
                    <div className="head">
                        <span>查看更多 ></span>
                        <h4>限时特价</h4>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <img src="http://localhost:8080/images/book/pic7.jpg" alt="" />
                                <p className="title">大明海枭</p>
                                <p className="num">49阅饼</p>
                                <del className="old-num">210阅饼</del>
                            </li>
                            <li>
                                <img src="http://localhost:8080/images/book/pic8.jpg" alt="" />
                                <p className="title">余生有你多欢喜</p>
                                <p className="num">159阅饼</p>
                                <del className="old-num">800阅饼</del>
                            </li>
                            <li>
                                <img src="http://localhost:8080/images/book/pic9.jpg" alt="" />
                                <p className="title">荣妃传</p>
                                <p className="num">7599阅饼</p>
                                <del className="old-num">8900阅饼</del>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home-back-top">
                    <a className="icon-arrow" onClick={() => {this.scrollToAnchor('home')}}>↑</a>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getBannerData();
        this.getBooksData();
    }
    scrollToAnchor(anchorName) {
        if(anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    }
    getBannerData(){
        fetch('http://localhost:8080/getBanner',{
            method: 'GET',
            headers: {
                'Accept': 'application/json.text/plain, */*'
            }
        }).then(res => 
            res.json()
        ).then(json => {
            this.setState({
                bannerData:json
            })

        }).catch(ex => {
            console.log('用户主页“轮播图”获取数据报错，',ex.message)
        })
    }
    changeNav(i) {
        this.setState({
            curNav: i
        })
    }
    getBooksData(){
        fetch('http://localhost:8080/getBookData',{
            method: 'GET',
            headers: {
                'Accept': 'application/json.text/plain, */*'
            }
        }).then(res => 
            res.json()
        ).then(json => {
            this.setState({
                booksData:json
            })
            this.props.actions.add({
                booksinfo: json
            })
        }).catch(ex => {
            console.log('用户主页“书籍”获取数据报错，',ex.message)
        })
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Choice)
