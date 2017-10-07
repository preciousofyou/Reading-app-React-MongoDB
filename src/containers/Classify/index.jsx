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
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title: '小说'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title: '文学'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title: '传记'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title: '历史'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title: '青春'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title: '心理'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title: '社科'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title: '励志'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title: '政治'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title: '军事'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title: '经济'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title: '管理'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title: '理财'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title: '旅游'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title: '美食'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title: '时尚'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title: '健身'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title: '孕产'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title: '少儿'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title: '亲子'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title: '科学'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title: '科普'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title: '医学'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title: '教辅'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title: '外语'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title: '工业'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title: '宗教'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title: '哲学'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title: '文化'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title: '艺术'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title: '修养'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title: '养生'}
                ],
                [
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title:'现代言情'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title:'古代言情'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title:'幻想言情 '},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'青春校园'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title:'同人作品'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'推理悬疑'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title:'惊悚/恐怖'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title:'次元专区'},
                ],
                [
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title:'逗比'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title:'少女'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title:'少年'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title:'温情'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title:'惊悚'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title:'玄幻'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'小说改'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title:'真人漫画'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title:'连环画'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title:'儿童漫画'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title:'武侠格斗'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title:'游戏运动'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title:'社会历史'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title:'星际科幻'}
                ],
                [
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title:'玄幻'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'奇幻'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title:'武侠'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title:'仙侠'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title:'都市'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title:'校园'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title:'历史'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title:'军事'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title:'游戏'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title:'竞技'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'科幻'}
                ],
                [
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title:'文摘文学'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title:'掌阅出品'},
                    {img: 'http://localhost:8080/images/book/pic4.jpg', title:'校园学习'},
                    {img: 'http://localhost:8080/images/book/pic5.jpg', title:'小说故事'},
                    {img: 'http://localhost:8080/images/book/pic6.jpg', title:'青春文学'},
                    {img: 'http://localhost:8080/images/book/pic7.jpg', title:'时尚娱乐'},
                    {img: 'http://localhost:8080/images/book/pic8.jpg', title:'生活健康'},
                    {img: 'http://localhost:8080/images/book/pic9.jpg', title:'女性杂志'},
                    {img: 'http://localhost:8080/images/book/pic1.jpg', title:'人物/文化'},
                    {img: 'http://localhost:8080/images/book/pic2.jpg', title:'时政新闻'},
                    {img: 'http://localhost:8080/images/book/pic3.jpg', title:'经管商业'}
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
                                        <img src={v.img} alt={v.title} />
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
