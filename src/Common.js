import React, { Component } from 'react';
import {Row,Col} from "antd"
import Header from "./components/Header"
import "./style/common.less"
// import {HashRouter as Router ,Route,Link} from "react-router-dom"
class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(this.props)
    }
    render() { 
        return ( 
			<div> 
				<Row className="container">
				<Col span={24}>
				<Header/>
				</Col>	
						
					</Row>
				  <Row className="content">
					{this.props.children}
					{/* <Home></Home> */}
				  </Row>
			</div>
           
        );
    }
}
 
export default Common;