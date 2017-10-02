import React from 'react'
import { Link } from 'react-router'

import './style.less'

import Header from '../../components/Header'

class Classify extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            data: [
                [
                    {title: '小说'},
                    {title: '文学'},
                    {title: '传记'},
                    {title: '历史'},
                    {title: '青春'},
                    {title: '心理'},
                    {title: '社科'},
                    {title: '励志'},
                    {title: '政治'},
                    {title: '军事'},
                    {title: '经济'},
                    {title: '管理'},
                    {title: '理财'},
                    {title: '旅游'},
                    {title: '美食'},
                    {title: '时尚'},
                    {title: '健身'},
                    {title: '孕产'},
                    {title: '少儿'},
                    {title: '亲子'},
                    {title: '科学'},
                    {title: '科普'},
                    {title: '医学'},
                    {title: '教辅'},
                    {title: '外语'},
                    {title: '工业'},
                    {title: '宗教'},
                    {title: '哲学'},
                    {title: '文化'},
                    {title: '艺术'},
                    {title: '修养'},
                    {title: '养生'}
                ],
                [
                    {title:'现代言情'},
                    {title:'古代言情'},
                    {title:'幻想言情 '},
                    {title:'青春校园'},
                    {title:'同人作品'},
                    {title:'推理悬疑'},
                    {title:'惊悚/恐怖'},
                    {title:'次元专区'},
                ],
                [
                    {title:'逗比'},
                    {title:'少女'},
                    {title:'少年'},
                    {title:'温情'},
                    {title:'惊悚'},
                    {title:'玄幻'},
                    {title:'小说改'},
                    {title:'真人漫画'},
                    {title:'连环画'},
                    {title:'儿童漫画'},
                    {title:'武侠格斗'},
                    {title:'游戏运动'},
                    {title:'社会历史'},
                    {title:'星际科幻'}
                ],
                [
                    {title:'玄幻'},
                    {title:'奇幻'},
                    {title:'武侠'},
                    {title:'仙侠'},
                    {title:'都市'},
                    {title:'校园'},
                    {title:'历史'},
                    {title:'军事'},
                    {title:'游戏'},
                    {title:'竞技'},
                    {title:'科幻'}
                ],
                [
                    {title:'文摘文学'},
                    {title:'掌阅出品'},
                    {title:'校园学习'},
                    {title:'小说故事'},
                    {title:'青春文学'},
                    {title:'时尚娱乐'},
                    {title:'生活健康'},
                    {title:'女性杂志'},
                    {title:'人物/文化'},
                    {title:'时政新闻'},
                    {title:'经管商业'}
                ]
            ],
            navData: ['出版','女频','漫画','男频','杂志'],
            curNav: 0
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="class-all">
                     <div className="class-nav">
                        <ul>
                            {
                                this.state.navData.map((item,i) => {
                                    return <li key={i} className={this.state.curNav===i?'active':''}><span onClick={() => this.changeNav(i)}>{item}</span></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="class-content">
                        <ul>
                            {
                                this.state.data[this.state.curNav].map((v,i) => {
                                    return <li key={i}>
                                        <img src="" alt="" />
                                        <Link to={"/classtab/"+v.title}>{v.title}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    changeNav(index) {
        this.setState({
            curNav: index
        })
    }
}

export default Classify