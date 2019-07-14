import React, { Component } from 'react';
import {Card,Tabs,Icon} from "antd"
const { TabPane } = Tabs;
class Tabss extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     callback(key) {
        console.log(key);
      }
    render() { 
        return ( <div>
            <Card>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab={<span><Icon type="edit"></Icon></span>} key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
            </Card>

        </div> );
    }
}
 
export default Tabss;