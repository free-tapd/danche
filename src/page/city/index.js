import React, { Component } from 'react';
import {Card,Button,Table,Form, Select} from "antd"
import axios from  "./../../axios/index"
const { Option } = Select;
class City extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleOpenCity(){}
    componentDidMount(){}
  
    render() {   
    //     requestList=()=>{
    //     axios.ajax()
    // }
        const columns=[
            {
                title:"城市id",
                dataIndex:"id"
            },{
                title:"城市",
                dataIndex:"name"
            },{
                title:"用车模式",
                dataIndex:"mode"
            },{
                title:"营运模式",
                dataIndex:"op_mode"
            },{
                title:"授权加盟商",
                dataIndex:"franchisee_name"
            },{
                title:"城市管理员",
                dataIndex:"city_admin"
            },{
                title:"操作时间",
                dataIndex:"updata_time"
            }
        ]
        return ( 
             <div>
                 <Card>
                    <FilterForm></FilterForm>
                 </Card>
                 <Card>
                     <Button onClick={this.handleOpenCity}> 打开城市管理</Button>
                     <Table columns={columns} >

                     </Table>
                     </Card>

        </div>);
    }
}
 class FilterForm extends Component{
    constructor(props){
        super(props)
    }
     render(){ 
        const {getFieldDecorator} =this.props.form;
          return (
  
         <Form layout="inline">
             <Form.Item  label="用车城市">
                {
                    getFieldDecorator('city_id',{
                      
                    })(
                        <Select placeholder="请选择" style={{width:100}}>
                            <Option value="1">北京市</Option>
                            <Option value="2">上海市</Option>
                            <Option value="3">深圳市</Option>
                        </Select>
                    )
                }
             </Form.Item >
             <Form.Item  label="用车模式" >
                {
                    getFieldDecorator('city_car')(
                        <Select placeholder="请选择" style={{width:150}}>
                            <Option value="">全部</Option>
                            <Option value="1">指定停车点</Option>
                            <Option value="2">禁止停车点</Option>
                        </Select>
                    )
                }
                </Form.Item >
                <Form.Item label="营运模式">
                    {
                        getFieldDecorator('use_model')(
                              <Select style={{width:80}}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                  
                </Form.Item>
                 <Form.Item  >
                    <Button type="primary">查询</Button>
                    <Button>重置</Button>
             </Form.Item >
         </Form>
          )
          
     }
 }
 FilterForm= Form.create({})(FilterForm)
export default City;