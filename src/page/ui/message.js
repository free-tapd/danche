import React, { Component } from 'react';
import { message, Button,Card } from 'antd';



class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   showMessage = () => {
  message.error('This is a normal message');
}; 
    render() { 
        return ( <div>
            <Card title="全局提示框">
                <Button onClick={this.showMessage}> Success</Button>
            </Card>
        </div> );
    }
}
 
export default Message;