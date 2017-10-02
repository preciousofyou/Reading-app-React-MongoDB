import React from 'react'
import { hashHistory,Link } from 'react-router'

import './style.less'

import Reco from '../../components/Reco'

class ClassTab extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            isShow: true,
            list: [
                '推理悬疑','言情小说','情感/家庭','幻想小说','惊悚/恐怖','武侠小说','科幻小说','官场','历史/架空','职场商战','军事谍战','世界名著','社会小说','乡土小说','中国近当代','中国古典','外国小说'
            ],
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
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="classtab-head">
                    <span className="icon-chevron-left" onClick={() =>this.changeRoute()}></span>
                    <span>{this.props.params.title}</span>
                    <Link to="/search" >
                        <span className="icon-search"></span>
                    </Link>
                </div>
                <div className="classtab-tab1">
                    <ul>
                        <li>热门书籍</li>
                        <li>最新上架</li>
                        <li>评分最高</li>
                    </ul>
                    <span onClick={() => this.changeShow()}>收起</span>
                </div>
                {
                    this.state.isShow
                    ? <div>
                        <div className="classtab-tab2">
                            <span>全部</span>
                            <ul>
                                {
                                    this.state.list.map((item,i) =>{
                                        return <li key={i}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="classtab-tab3">
                            <ul>
                                <li>全部</li>
                                <li>免费</li>
                                <li>特价</li>
                                <li>VIP</li>
                            </ul>
                        </div>
                    </div>
                    :''
                }
                <div className="home-another-common">
                    <ul>
                    {
                        this.state.data.map((item,i) => {
                            return <Reco key={i} obj={item} />
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
    changeRoute(){
        hashHistory.goBack();
    }
    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}


export default ClassTab