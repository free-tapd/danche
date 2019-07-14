import React, { Component } from 'react';
import "./ui.less"
import {Card ,Button,Radio,Modal} from "antd"
class Models extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showModal:false,
            showModal1:false
        }
    }
    handeOpen=(type)=>{
        console.log([type]);
        
        this.setState({
            [type]:true
        })
    }
    handleConfirm(type){
        Modal[type]({
            title:"确认",
            content:"你确定学会react了吗",
            onkeydown(){
                console.log('ok')
            },
            onCancel(){
                console.log('Cancle')
            }
        })
    }
    render() { 
        return ( <div>
            <Card className="card-warpper">
            <Button type="primary" onClick={()=>this.handeOpen('showModal')}> model </Button>
            </Card> 
            <Card className="card-warpper">
            <Button type="primary" onClick={()=>this.handleConfirm('success')}> confirm </Button>
            </Card>
            <Modal title="react" visible={this.state.showModal} 
            onCancel={()=>{
                this.setState({
                    showModal:false
                })
            } }
            >
                <p> come to title</p>
            </Modal>
        </div>  );
    }
}
 
export default Models;