import React, { Component } from 'react';
import {Card,Spin,Button,Icon,Alert} from "antd"
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            spinning:true
         }
    }
    render() { 
        const icon=<Icon type="loading"/>
        return (  <div>

            <Card title="Spin用法" className="card-warpper">
                <Spin size="small"></Spin>
                <Spin size="large" indicator={icon}></Spin>
            </Card> 
            <Card title="Spin用法" className="card-warpper">

            
                    
                 <Spin tip="加载中....">
                    <Alert
                    message="REACT"
                    description=" huanying lai dao "
                    type="success"
                    />

                 </Spin>
                <Alert
                message="REACT"
                description=" huanying lai dao "
                type="warning"
                >

                </Alert>
            </Card>
        </div>);
    }
}
 
export default Loading;