import React, { Component } from 'react';
import { Row,Col } from 'antd';
import "./index.less"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.setState({
            userName:"还盼一脚"
        })
        setInterval(()=>{
            const sysTime= new Date().toLocaleString()
            
            this.setState({
                sysTime
            })
        },1000)
    }
    render() { 
        return ( 
            <div className="header">
            <Row className="header-top">
                <Col span={24}>
                    <span>欢迎{this.state.userName}</span>
                    <a>退出</a>
                </Col>
            </Row>
            <Row className="breadCrumb">
                <Col span={4}> 首页</Col>
                <Col span={20}> 
                    <span> {this.state.sysTime}</span>
					<iframe width="420" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=12&icon=1&py=xinhuaqu&num=3&site=12"></iframe>
               </Col>
            </Row>
             </div>
         );
    }
}
 
export default Header;