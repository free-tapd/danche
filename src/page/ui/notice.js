import React, { Component } from 'react';
import { Button, notification,Card } from 'antd';



class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     openNotification = () => {
  notification.warning({
    message: '考勤提醒',
    description:
      ' 上月迟到5次，扣款8元',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
    render() { 
        return (  <div>
            <Card title="通知">
                <Button type="success" onClick={this.openNotification}>通知提醒 </Button>
            </Card>

        </div>);
    }
}
 
export default Notice;