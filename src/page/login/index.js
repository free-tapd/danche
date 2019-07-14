import React, { Component } from 'react'
import {Card, Form,Input,Button,Icon} from "antd"

const FormItem=Form.Item
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    handleSubmit(){
        const userInfo=this.props.form.getFieldsValue()
        this.props.from.validateFields( (err,value)=>{
            if(!err){

            }
         })

        
    }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return (<div>
            <Card title="登录行内表单">
                <Form layout="inline">
                <FormItem>
                        <Input placeholder="用户名"></Input>
                    </FormItem>  <FormItem>
                        <Input placeholder="用户名"></Input>
                    </FormItem>  <FormItem>
                        <Button primary="info">登陆</Button>
                    </FormItem>
                </Form>

            </Card>
            <Card title="登录行内表单" style={{marginTop:'10px'}}>
                <Form style={{width:300}}>
                <FormItem >
                {
                    getFieldDecorator('username', {

                        initialValue:"username",
                    rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
                    </FormItem>  <FormItem>
                        <Input placeholder="用户名"></Input>
                    </FormItem>  <FormItem>
                        <Button primary="info" onClick={this.handleSubmit}>登陆</Button>
                    </FormItem>
                </Form>

            </Card>
        </div>  );
    }
}
 
export default Form.create({ name: 'normal_login' })(Login);;